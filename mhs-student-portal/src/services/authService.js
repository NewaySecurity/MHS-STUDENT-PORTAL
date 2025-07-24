// Simple authentication service using localStorage
class AuthService {
  constructor() {
    this.currentUser = null;
    this.users = JSON.parse(localStorage.getItem('mhs_users') || '{}');
    this.initDefaultUsers();
  }

  initDefaultUsers() {
    // Add some default users if none exist
    if (Object.keys(this.users).length === 0) {
      this.users = {
        '9001010000001': {
          id: '9001010000001',
          password: 'student123',
          name: 'John',
          surname: 'Doe',
          email: 'john.doe@example.com',
          progress: {
            videosWatched: [],
            quizResults: [],
            currentModule: 'k53-signs'
          },
          createdAt: new Date('2024-01-01')
        },
        '9502020000002': {
          id: '9502020000002',
          password: 'learner456',
          name: 'Jane',
          surname: 'Smith',
          email: 'jane.smith@example.com',
          progress: {
            videosWatched: [],
            quizResults: [],
            currentModule: 'k53-signs'
          },
          createdAt: new Date('2024-01-01')
        }
      };
      this.saveUsers();
    }
  }

  validateIdNumber(idNumber) {
    // Basic SA ID number validation (13 digits)
    return /^\d{13}$/.test(idNumber);
  }

  async loginUser(idNumber, password) {
    return new Promise((resolve, reject) => {
      if (!this.validateIdNumber(idNumber)) {
        reject(new Error('Invalid ID number format. Must be 13 digits.'));
        return;
      }

      const user = this.users[idNumber];
      if (!user) {
        reject(new Error('User not found. Please check your ID number.'));
        return;
      }

      if (user.password !== password) {
        reject(new Error('Incorrect password.'));
        return;
      }

      this.currentUser = user;
      localStorage.setItem('mhs_current_user', JSON.stringify(user));
      resolve(user);
    });
  }

  async registerUser(userData) {
    return new Promise((resolve, reject) => {
      const { idNumber, password, name, surname, email } = userData;

      if (!this.validateIdNumber(idNumber)) {
        reject(new Error('Invalid ID number format. Must be 13 digits.'));
        return;
      }

      if (this.users[idNumber]) {
        reject(new Error('User with this ID number already exists.'));
        return;
      }

      if (password.length < 6) {
        reject(new Error('Password must be at least 6 characters long.'));
        return;
      }

      const newUser = {
        id: idNumber,
        password,
        name,
        surname,
        email,
        progress: {
          videosWatched: [],
          quizResults: [],
          currentModule: 'k53-signs'
        },
        createdAt: new Date()
      };

      this.users[idNumber] = newUser;
      this.saveUsers();
      this.currentUser = newUser;
      localStorage.setItem('mhs_current_user', JSON.stringify(newUser));
      
      resolve(newUser);
    });
  }

  logoutUser() {
    this.currentUser = null;
    localStorage.removeItem('mhs_current_user');
    return Promise.resolve();
  }

  getCurrentUser() {
    if (!this.currentUser) {
      const stored = localStorage.getItem('mhs_current_user');
      if (stored) {
        this.currentUser = JSON.parse(stored);
      }
    }
    return this.currentUser;
  }

  async saveUserProgress(userId, progress) {
    return new Promise((resolve) => {
      if (this.users[userId]) {
        this.users[userId].progress = { ...this.users[userId].progress, ...progress };
        this.saveUsers();
        
        // Update current user if it's the same user
        if (this.currentUser && this.currentUser.id === userId) {
          this.currentUser.progress = this.users[userId].progress;
          localStorage.setItem('mhs_current_user', JSON.stringify(this.currentUser));
        }
      }
      resolve();
    });
  }

  async getUserProgress(userId) {
    return new Promise((resolve) => {
      const user = this.users[userId];
      resolve(user ? user.progress : null);
    });
  }

  async saveUserProfile(userId, profileData) {
    return new Promise((resolve) => {
      if (this.users[userId]) {
        this.users[userId] = { ...this.users[userId], ...profileData };
        this.saveUsers();
        
        // Update current user if it's the same user
        if (this.currentUser && this.currentUser.id === userId) {
          this.currentUser = this.users[userId];
          localStorage.setItem('mhs_current_user', JSON.stringify(this.currentUser));
        }
      }
      resolve();
    });
  }

  async getUserProfile(userId) {
    return new Promise((resolve) => {
      const user = this.users[userId];
      resolve(user || null);
    });
  }

  saveUsers() {
    localStorage.setItem('mhs_users', JSON.stringify(this.users));
  }

  // Check if user is authenticated
  isAuthenticated() {
    return !!this.getCurrentUser();
  }

  // Get all users (for admin purposes - remove in production)
  getAllUsers() {
    return this.users;
  }
}

// Create singleton instance
const authService = new AuthService();

export default authService;
