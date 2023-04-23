<template>
  <div>
    <h1>Projects</h1>
    <form @submit.prevent="addProject">
      <div>
        <label for="name">Name: </label>
        <input type="text" id="name" v-model="newProject.name" required>
      </div>
      <div>
        <label for="short_description">Short Description: </label>
        <textarea id="short_description" v-model="newProject.short_description" required></textarea>
      </div>
      <div>
        <label for="long_description">Long Description: </label>
        <textarea id="long_description" v-model="newProject.long_description" required></textarea>
      </div>
      <div>
        <label for="client">Client: </label>
        <input id="client" type="text" v-model="newProject.client" required>
      </div>
      <div>
        <label for="contractor">Contractor: </label>
        <input id="contractor" type="text" v-model="newProject.contractor" required>
      </div>
      <div>
        <label for="start_date">Starting date: </label>
        <input type="date" id="start_date" v-model="newProject.start_date" required>
      </div>
      <div>
        <label for="end_date">Finishing date: </label>
        <input type="date" id="end_date" v-model="newProject.end_date" required>
      </div>
      <div>
        <label for="card_image">Card Image</label>
        <input type="file" id="card_image" @change="onFileChange" required>
      </div>
      <button class="mt-5 bg-green-600 text-white font-semibold uppercase border border-white rounded-xl p-4" type="submit">Add project</button>
    </form>
    <div v-for="project in projects" :key="project.id">
      <img :src="project.card_image" alt="project image" class="w-[300px] h-[300px] rounded-xl">
      <h2> {{ project.name }}</h2>
      <p> {{ project.short_description }}</p>
      <p> {{ project.long_description }}</p>
      <p> {{ project.client}}</p>
      <p> {{ project.contractor}}</p>
      <p> {{ project.start_date}}</p>
      <p> {{ project.end_date}}</p>
    </div>
  </div>
</template>

<script>
import { getFirestore, collection, getDocs, addDoc  } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { onMounted, reactive } from "vue";

export default {
  setup() {
    // Initialize Firestore
    const db = getFirestore()

    // Define reactive state
    const state = reactive({
      projects: [],
      newProject: {
        name: '',
        short_description: '',
        long_description: '',
        client: '',
        contractor: '',
        start_date: '',
        end_date: '',
        card_image: '',
      },
      selectedFile: null
    })

    const fetchProjects = async () => {
      const projectCollection = collection(db, 'projects')
      const querySnapshot = await getDocs(projectCollection)
      querySnapshot.forEach(doc => {
        state.projects.push({
          id: doc.id,
          name: doc.data().name,
          short_description: doc.data().short_description,
          long_description: doc.data().long_description,
          client: doc.data().client,
          contractor: doc.data().contractor,
          start_date: doc.data().start_date,
          end_date: doc.data().end_date,
          card_image: doc.data().card_image,
        })
      })
    }

    // Load projects on component mount
    onMounted(fetchProjects)

    // Add a new project to Firestore
    const addProject = async () => {
  if (!state.selectedFile) {
    return;
  }
  const downloadUrl = await uploadImage(state.selectedFile);
  const projectCollection = collection(db, 'projects');
  const newProject = {
    name: state.newProject.name,
    short_description: state.newProject.short_description,
    long_description: state.newProject.long_description,
    client: state.newProject.client,
    contractor: state.newProject.contractor,
    start_date: state.newProject.start_date,
    end_date: state.newProject.end_date,
    card_image: downloadUrl,
  };
  const { id } = await addDoc(projectCollection, newProject);
  state.projects.push({
    id,
    ...newProject
  });
  state.newProject.name = '';
  state.newProject.short_description = '';
  state.newProject.long_description = '';
  state.newProject.client = '';
  state.newProject.contractor = '';
  state.newProject.start_date = '';
  state.newProject.end_date = '';
  state.selectedFile = null;
};

const storage = getStorage();

    const uploadImage = async(file) => {
      const storageRef = ref(storage, `images/${file.name}`)
      await uploadBytes(storageRef, file)
      const downloadUrl = await getDownloadURL(storageRef)
      return downloadUrl
    }

    const onFileChange = event => {
      const file = event.target.files[0];
      if(file) {
        state.selectedFile = file
      }
    }

    return {
      ...state,
      addProject,
      onFileChange,
      uploadImage
    }
  }
}
</script>

<style>

</style>