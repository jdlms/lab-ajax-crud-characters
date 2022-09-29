class APIHandler {
  constructor(baseUrl) {
    this.api = axios.create({ baseUrl: this.BASE_URL });
  }

  async getFullList() {
    const { data } = await this.api.get("/characters");
    console.log(data);
    return data;
  }

  async getOneRegister(id) {
    const { data } = await this.api.get(`/characters/${id}`);
    return data;
  }

  async createOneRegister(newCharacter) {
    const newCharacter = { ...characterData };
    const { data } = await this.api.post("/characters", newCharacter);
    return { data };
  }

  async updateOneRegister(id, updatedInfo) {
    const { data } = await this.api.put(`/characters/${id}`, updatedInfo);
  }

  async deleteOneRegister(id) {
    const { data } = await this.api.delete(`/character/${id}`);
  }
}
