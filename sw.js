self.addEventListener('pus', () => {
    self.registration.sendNotification('test message', {});
});