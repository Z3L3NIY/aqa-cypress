/// <reference types="cypress" />

describe("Check all button and links", () => {
  beforeEach(() => {
    cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");
  });

  it("Check hillelauto logo", () => {
    cy.get("a.header_logo").should("exist");
  });

  it("Check Home link", () => {
    cy.contains("a.header-link", "Home").should("exist");
  });

  it("Check About link", () => {
    cy.contains("button.header-link", "About").should("exist");
  });

  it("Check Contacts button", () => {
    cy.contains("button.header-link", "Contacts").should("exist");
  });

  it("Check Log in button", () => {
    cy.contains("button.header-link", "Guest log in").should("exist");
  });

  it("Check Sign in button", () => {
    cy.contains("button.header_signin", "Sign In").should("exist");
  });

  it("Check Sign up button", () => {
    cy.get("button.hero-descriptor_btn").should("exist");
  });

  it("Check Facebook logo", () => {
    cy.get("a.socials_link span.icon-facebook").should("exist");
  });

  it("Check Telegram logo", () => {
    cy.get("a.socials_link span.icon-telegram").should("exist");
  });

  it("Check Youtube logo", () => {
    cy.get("a.socials_link span.icon-youtube").should("exist");
  });

  it("Check Instagram logo", () => {
    cy.get("a.socials_link span.icon-instagram").should("exist");
  });

  it("Check LinkedIn logo", () => {
    cy.get("a.socials_link span.icon-linkedin").should("exist");
  });

  it("Check ithillel.ua link", () => {
    cy.contains("a.contacts_link", "ithillel.ua").should("exist");
  });

  it("Check support@ithillel.ua link", () => {
    cy.contains("a.contacts_link", "support@ithillel.ua").should("exist");
  });

  it("Check footer logo", () => {
    cy.get("a.footer_logo").should("exist");
  });
});
