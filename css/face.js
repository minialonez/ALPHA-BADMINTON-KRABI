const Face = {
  loaded: false,

  async loadModels() {
    if (this.loaded) return;
    await faceapi.nets.tinyFaceDetector.loadFromUri(CONFIG.MODELS_URL);
    await faceapi.nets.faceLandmark68Net.loadFromUri(CONFIG.MODELS_URL);
    await faceapi.nets.faceRecognitionNet.loadFromUri(CONFIG.MODELS_URL);
    this.loaded = true;
  },

  async detectFaceWithDescriptor(videoEl) {
    return await faceapi
      .detectSingleFace(videoEl, new faceapi.TinyFaceDetectorOptions({
        inputSize: 320, scoreThreshold: 0.5
      }))
      .withFaceLandmarks()
      .withFaceDescriptor();
  },

  computeMatch(queryDescriptor, candidates, threshold) {
    threshold = threshold || CONFIG.FACE_MATCH_THRESHOLD;
    let best = null;
    candidates.forEach(c => {
      if (!c.FaceDescriptors) return;
      try {
        const data = typeof c.FaceDescriptors === 'string'
          ? JSON.parse(c.FaceDescriptors) : c.FaceDescriptors;
        ['front', 'left', 'right'].forEach(pose => {
          if (!data[pose]) return;
          const stored = new Float32Array(data[pose]);
          const dist = faceapi.euclideanDistance(queryDescriptor, stored);
          if (dist < threshold && (!best || dist < best.distance)) {
            best = { member: c, pose: pose, distance: dist };
          }
        });
      } catch (e) {
        console.warn('Bad descriptor for', c.DisplayID, e);
      }
    });
    return best;
  },

  averageDescriptors(descriptors) {
    if (descriptors.length === 0) return null;
    const dim = descriptors[0].length;
    const avg = new Float32Array(dim);
    descriptors.forEach(d => {
      for (let i = 0; i < dim; i++) avg[i] += d[i];
    });
    for (let i = 0; i < dim; i++) avg[i] /= descriptors.length;
    return Array.from(avg);
  },
};
