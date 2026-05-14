const api = {
  async call(action, params = {}) {
    const res = await fetch(CONFIG.API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ apiKey: CONFIG.API_KEY, action, params }),
    });
    const data = await res.json();
    if (!data.ok) throw new Error(data.error || 'API error');
    return data.data;
  },
  ping() { return this.call('ping'); },
  getSettings() { return this.call('getSettings'); },
  getCourses() { return this.call('getCourses'); },
  getMembers() { return this.call('getMembers'); },
  getMember(uuid) { return this.call('getMember', { uuid }); },
  searchMember(query) { return this.call('searchMember', { query }); },
  getMembersForFaceMatch() { return this.call('getMembersForFaceMatch'); },
  createMember(data) { return this.call('createMember', data); },
  updateMember(data) { return this.call('updateMember', data); },
  registerFace(personUuid, descriptors) {
    return this.call('registerFace', { personUuid, descriptors });
  },
  getActiveEnrollments(memberUuid) {
    return this.call('getActiveEnrollments', { memberUuid });
  },
  createEnrollment(memberUuid, courseUuid, paymentStatus, notes) {
    return this.call('createEnrollment', { memberUuid, courseUuid, paymentStatus, notes });
  },
  checkIn(personUuid, enrollmentUuid, coachUuid, method) {
    return this.call('checkIn', { personUuid, enrollmentUuid, coachUuid, method });
  },
  voidAttendance(attendanceUuid, reason) {
    return this.call('voidAttendance', { attendanceUuid, reason });
  },
  getAttendanceToday() { return this.call('getAttendanceToday'); },
  getMemberAttendance(memberUuid, limit) {
    return this.call('getMemberAttendance', { memberUuid, limit });
  },
};
