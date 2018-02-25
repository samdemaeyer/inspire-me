import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  tagName: '',
  
  actions: {
    selectImage(event) {
      event.preventDefault();
      const upload = event.target.files ? event.target.files[0] : event.dataTransfer.files[0];
      const myReader = new FileReader();
      this.set('uploadTitle', upload.name);

      myReader.onloadend = () => {
        const artUpload = this.store.createRecord('art-upload', {
          base64: myReader.result,
          title: this.get('uploadTitle'),
          user: this.get('currentUser.content')
        });
        this.get('uploads').pushObject(artUpload);
        this.set('upload', artUpload);
      }

      myReader.readAsDataURL(upload);
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
