class ideasStore {
  getIdeas = async () => {
    const response = await fetch("http://127.0.0.1:8080/api/idea");
    const json = response.json();
    return json;
  };
}

export default new ideasStore();
