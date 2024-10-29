const cds = require("@sap/cds/lib");
const { default: axios } = require("axios");
const { GET, POST, DELETE, PATCH, expect } = cds.test(__dirname + "../../");

axios.defaults.auth = { username: "test.support@qarmet.kz", password: "root" };

jest.setTimeout(11111);

describe("SupportService Testing", () => {
  // Тесты для получения вопросов и ответов
  it("Should retrieve Questions entity", async () => {
    const supportService = await cds.connect.to("SupportService");
    const { Questions } = supportService.entities;
    expect(await SELECT.from(Questions)).to.be.an("array");
  });

  it("Should retrieve Answers entity", async () => {
    const supportService = await cds.connect.to("SupportService");
    const { Answers } = supportService.entities;
    expect(await SELECT.from(Answers)).to.be.an("array");
  });
});
