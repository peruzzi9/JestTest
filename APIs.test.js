const mathOperations = require("./calculator");
const request = require("supertest");
const requestURL = "https://api.dev.swoshstest.com";

describe("** GET APIs Test=================", () => {


  test(" /api/notice ================= ", async () => {
    const response = await request(requestURL).get("/api/notice?lang=en&device_type=mac&app_version=1.0.32&device_id=CE091A1E-AB7E-5744-9753-EF9CB6D86280");
    expect(response.body.message).toEqual("Success");
    expect(response.statusCode).toBe(201);
  });

  test(" /api/servers ================= ", async () => {
    const response = await request(requestURL).get("/api/servers?lang=en");
    expect(response.body.message).toEqual("Success");
    expect(response.statusCode).toBe(201);
  });
  test(" /api/systemplans ================= ", async () => {
    const response = await request(requestURL).get("/api/systemplans?lang=en");
    expect(response.body.message).toEqual("Success");
    expect(response.statusCode).toBe(201);
  });

  
});

describe("POST APIs Test=================", () => {
 
  test(" /api/login ================= ", async () => {
    
      let data = {
        username: "test93@test.com ",
        password: "123456",
        device_code: "chrome",
        device_name: "chrome" + " Browser",
        device_type: "web",
        myaccount: true,
        lang: "en",
        version: "version",
        }; 
      const response = await request(requestURL).post('/api/login').send(data); 
        expect(response.body.message).toEqual("Login Success");
        expect(response.statusCode).toBe(201); 
        expect(response.body.accessToken).not.toBe(null); 
        expect(response.body.accessToken).not.toHaveLength(0);   
  });
}); 

/* describe("Calculator Tests ==================", () => {
//-------------------------------------------------------------  
    test("Addition of 2 numbers", () => {
    // arrange and act
    var result = mathOperations.sum(1, 2);
    // assert
    expect(result).toBe(3);
  });
//-------------------------------------------------------------
  test("Subtraction of 2 numbers", () => {
    // arrange and act
    var result = mathOperations.diff(10, 2);
    // assert
    expect(result).toBe(21); //updated to fail
  });
//-------------------------------------------------------------
  test("Multiplication of 2 numbers", () => {
    // arrange and act
    var result = mathOperations.product(2, 8);
    // assert
    expect(result).toBe(10); //updated to fail
  });
//-------------------------------------------------------------
  test("Division of 2 numbers", () => {
    // arrange and act
    var result = mathOperations.divide(24, 8);
    // assert
    expect(result).toBe(3);
  });
}); */
