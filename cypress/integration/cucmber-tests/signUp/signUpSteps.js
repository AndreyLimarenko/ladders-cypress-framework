import {Given, When, And} from "cypress-cucumber-preprocessor/steps";

const url = 'https://master.qa.theladders.com/'
const newPersonalEmail = "limarenko+" + pass_gen(12) + "personal@theladders.com"
const newWorkEmail = "limarenko+" + pass_gen(12) + "work@theladders.com"

function pass_gen(len) {
    let chrs;
    chrs = 'zxcvbnmasdfghjklqwertyuiop123456789';
    var str = '';
    for (var i = 0; i < len; i++) {
        var pos = Math.floor(Math.random() * chrs.length);
        str += chrs.substring(pos, pos + 1);
    }
    return str;
}

Given('I open member start page', () => {
    cy.visit(url)
})

And(/^I select value from whatYouDo dropdown$/, () => {
    cy.get("#functionId").select("Technology")
})

And(/^I select current salary value from dropdown$/, () => {
    cy.get("#salary").select("$110K+")
})

And(/^I select desired salary value from dropdown$/, () => {
    cy.get("#desiredSalary").select("$250K+")
})

And(/^I set job title$/, () => {
    cy.get("#targetJobTitle").type("VP")
})

And(/^I click '(Next|Get started)' button$/, () => {
    cy.get(".link-button").click()
})

And(/^I set first name$/, () => {
    cy.get("#firstName").type("firstName")
})

And(/^I set last name$/, () => {
    cy.get("#lastName").type("lastName")
})

And(/^I set zip code$/, () => {
    cy.get("#zipCode").type("10001")
})

And(/^I set valid email$/, () => {
    cy.get("#email").type("limarenko+" + pass_gen(12) + "@theladders.com")
    cy.get("#password").type("Limarenko7")
})

And(/^I set valid password$/, () => {
    cy.get("#password").type("Testp@ssw0rd")
})

And(/^I checked 'Terms of Use' checkbox$/, () => {
    cy.xpath("//p/img").click()
})

And(/^I click 'Continue with Basic account' link on Members sign up paywall page$/, () => {
    cy.get("#billing-skip-link").click()
})

And(/^I click 'View Jobs' button on Members select specialities form$/, () => {
    cy.get(".link-button").click()
})

And(/^I select 'Account Info' tab on Members settings page$/, () => {
    cy.get(".header-user-name").click()
    // cy.get('h2').should("contain", 'Account Info')
})

And(/^I click 'Edit' button at contact section on Members account info page$/, () => {
    cy.xpath("//span[.='Edit']").click()
})

And(/^I set 'new_firstName' as new first name on Members account info page$/, () => {
    cy.xpath("//label[.='First Name']/following-sibling::input").clear()
    cy.xpath("//label[.='First Name']/following-sibling::input").type("new_firstName")
})

And(/^I set 'new_lastName' as new last name on Members account info page$/, () => {
    cy.xpath("//label[.='Last Name']/following-sibling::input").clear()
    cy.xpath("//label[.='Last Name']/following-sibling::input").type("new_lastName")
})

And(/^I set 'new_email' as new account email on Members account info page$/, () => {
    cy.xpath("//label[.='Personal Email']/following-sibling::input").clear()
    cy.xpath("//label[.='Personal Email']/following-sibling::input").type(newPersonalEmail)
})

And(/^I set 'new_work_email' as new work email on Members account info page$/, () => {
    cy.xpath("//label[.='Work Email']/following-sibling::input").type(newWorkEmail)
})

And(/^I set 'new_phone_number' as new phone number on Members account info page$/, () => {
    // cy.xpath("//label[.='Mobile Phone']/following-sibling::input").clear()
    const number = "12345678954"
    cy.xpath("//label[.='Mobile Phone']/following-sibling::input").type(number)
})

And(/^I set 'new_zip' as new zip code on Members account info page$/, () => {
    cy.xpath("//input[@name='zip']").clear()
    cy.xpath("//input[@name='zip']").type("99501")
})

And(/^I click 'Save' button on Members account info page$/, () => {
        cy.get(".save-button-component").click()
    })

And(/^Full name is '_generated_new_firstName _generated_new_lastName' on Members account info page$/, () => {
     cy.get('.acct-info-card-left').should("contain", 'new_firstName')
     cy.get('.acct-info-card-left').should("contain", 'new_lastName')
})

And(/^Personal email is '_generated_new_email' on Members account info page$/, () => {
    cy.get('.acct-info-card-left').should("contain", newPersonalEmail)
})

And(/^Work email is '_generated_new_work_email' on Members account info page$/, () => {
    cy.get('.acct-info-card-left').should("contain", newWorkEmail)
})
