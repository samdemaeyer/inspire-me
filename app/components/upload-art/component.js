import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  tagName: '',

  init(...args) {
    this._super(...args);
    this.surfaceOptions = ['Canvas', 'Option 2', 'Option 3', 'Option 4'];
    this.mediumOptions = ['Oil', 'Option 2', 'Option 3', 'Option 4'];
    this.artStyles = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
    this.groupedSubjects = [
      ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4'],
      ['Subject 5', 'Subject 6', 'Subject 7', 'Subject 8'],
      ['Subject 9', 'Subject 10', 'Subject 11'],
    ];
    // this.upload = this.store.createRecord('art-upload', { tags: [], subjects: [] });
  },

  actions: {
    selectImage(event) {
      event.preventDefault();
      const upload = event.target.files ? event.target.files[0] : event.dataTransfer.files[0];
      const myReader = new FileReader();
      const imageExtention = `.${upload.type.split('image/')[1]}`;
      this.set('uploadTitle', upload.name.replace(imageExtention, ''));

      myReader.onloadend = () => {
        const artUpload = this.store.createRecord('art-upload', {
          base64: myReader.result,
          title: this.get('uploadTitle'),
          user: this.get('currentUser.content'),
          tags: [],
          subjects: []
        });
        this.get('uploads').pushObject(artUpload);
        this.set('upload', artUpload);
      }

      myReader.readAsDataURL(upload);
    },

    createTag(e) {
      if (e.keyCode === 13) { // enter
        this.get('upload.tags').pushObject(this.get('tag'));
        this.set('tag', undefined);
      }
    },

    removeTag(tag) {
      this.get('upload.tags').removeObject(tag);
    },

    subjectSelect(subject) {
      if (this.get('upload.subjects').includes(subject)) {
        this.get('upload.subjects').removeObject(subject);
      } else {
        this.get('upload.subjects').pushObject(subject);
      }
    },

    removeUpload() {
      this.get('uploads').removeObject(this.get('upload'));
      this.set('upload', undefined);
    },

    allowDrop(e) {
      e.preventDefault();
    }
  }
});
