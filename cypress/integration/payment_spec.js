const { v4: uuidv4 } = require("uuid");

describe("payment", () => {
  it("user can make payments", () => {
    //login
    cy.visit("/");
    cy.findByRole("textbox", { name: /username/i }).type("johndoe");
    cy.findByLabelText(/password/i).type("s3cret");
    cy.findByRole("checkbox", { name: /remember me/i }).check();
    cy.findByRole("button", { name: /sign in/i }).click();

    //check accounnt balance

    let oldBalance;
    cy.get('[data-test="sidenav-user-balance"]').then(($balance) => (oldBalance = $balance.text())); //.then(balance=>console.log(balance))

    //click on pay button
    cy.findByRole("button", { name: /new/i }).click();

    //search for user
    cy.findByRole("textbox").type("davon becker");
    cy.findByText(/devon becker/i).click();

    //add amount and note and click pay
    const note = uuidv4();
    const amount = "5.00";
    cy.findByPlaceholderText(/amount/i).type(amount);
    cy.findByPlaceholderText(/add a note/i).type("dinner " + note);
    cy.findByRole("button", { name: /pay/i }).click();

    //return to transcations
    cy.findByRole("button", { name: /return to transactions/i }).click();

    //go to personal paymets
    cy.findByRole("tab", { name: /mine/i }).click();

    //click on payments
    cy.findByText("dinner " + note).scrollIntoView();
    cy.findByText("dinner " + note).click({ force: true });

    //verify if payment was made

    cy.findByText(`-$${amount}`).should("be.visible");
    cy.findByText("dinner " + note).should("be.visible");

    //verify if payment amount was deducted
  });
});
