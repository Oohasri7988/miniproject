$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/feature/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "\tIn order to buy the product in webpage\n As a customer\n I want to get access to the portal",
  "keyword": "Feature"
});
formatter.background({
  "name": "Below are the common steps for the scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with productstore page.",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_have_browser_with_productstore_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Valid Credential Test",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I enter username as \u0027kavyakalathuru1998@gmail.com\u0027 and I enter password as \u0027kavyakalathuru\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_enter_username_as_and_I_enter_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Should access to the portal with title as \u0027Log out\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_Should_access_to_the_portal_with_title_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Valid Credential Test",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter username as \u0027\u003cusername\u003e\u0027 and I enter password as \u0027\u003cpassword\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "name": "I Should access to the portal with title as \u0027Log out\u0027",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "veerahemagovada@gmail.com",
        "veerahema"
      ]
    },
    {
      "cells": [
        "oohasri234@gmail.com",
        "9493824001"
      ]
    }
  ]
});
formatter.background({
  "name": "Below are the common steps for the scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with productstore page.",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_have_browser_with_productstore_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Valid Credential Test",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter username as \u0027veerahemagovada@gmail.com\u0027 and I enter password as \u0027veerahema\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_enter_username_as_and_I_enter_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Should access to the portal with title as \u0027Log out\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_Should_access_to_the_portal_with_title_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Below are the common steps for the scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with productstore page.",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_have_browser_with_productstore_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Valid Credential Test",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter username as \u0027oohasri234@gmail.com\u0027 and I enter password as \u00279493824001\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_enter_username_as_and_I_enter_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Should access to the portal with title as \u0027Log out\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_Should_access_to_the_portal_with_title_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Below are the common steps for the scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with productstore page.",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_have_browser_with_productstore_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Invalid Password Credential",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I enter valid username as \u0027kavyakalathuru1998@gmail.com\u0027 and password as \u0027kavyakalathuru1\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_enter_valid_username_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get error popup message as \u0027Wrong password.\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_should_get_error_popup_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Below are the common steps for the scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with productstore page.",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_have_browser_with_productstore_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Empty userName",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I  will not enter valid username as \u0027\u0027 and i will enter valid password as \u0027kavyakalathuru\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_will_not_enter_valid_username_as_and_i_will_enter_valid_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.55.104\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002710.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\USER\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:52546}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 893c3d25b4351a1f64862874bdcc4f94\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat com.cts.productstorepages.LoginPage.clickOnLoginAgain(LoginPage.java:34)\r\n\tat com.cts.stepdefinition.StepDefinition.i_will_not_enter_valid_username_as_and_i_will_enter_valid_password_as(StepDefinition.java:122)\r\n\tat ✽.I  will not enter valid username as \u0027\u0027 and i will enter valid password as \u0027kavyakalathuru\u0027(file:///C:/Users/USER/eclipse-workspace/ProductStoreBDD2/src/main/resources/feature/Login.feature:26)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I should get  popup message as \u0027Please fill out Username and Password.\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_should_get_popup_message_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "Below are the common steps for the scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with productstore page.",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_have_browser_with_productstore_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Empty password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I enter valid username as \u0027kavyakalathuru1998@gmail.com\u0027 and i will not enter password  \u0027\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_enter_valid_username_as_and_i_will_not_enter_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get error popup message for empty password as \u0027Please fill out Username and Password.\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_should_get_error_popup_message_for_empty_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Below are the common steps for the scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with productstore page.",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_have_browser_with_productstore_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "valid filling contact",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I enter valid recepeintEmail as \u0027kavyakalathuru1998@gmail.com\u0027 and recepientName as \u0027kavyakalathuru\u0027 and message as \u0027want to buy a mobile\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_enter_valid_recepeintEmail_as_and_recepientName_as_and_message_as(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : Thanks for the message!!}\n  (Session info: chrome\u003d80.0.3987.149): Thanks for the message!!\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.55.104\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002710.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\USER\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:52601}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 912ca24083480a3da962c7a10872d5db\n*** Element info: {Using\u003dxpath, value\u003d//button[text()\u003d\u0027Send message\u0027]}\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.cts.productstorepages.ContactInfoPage.clickOnMessage(ContactInfoPage.java:41)\r\n\tat com.cts.stepdefinition.StepDefinition.i_enter_valid_recepeintEmail_as_and_recepientName_as_and_message_as(StepDefinition.java:200)\r\n\tat ✽.I enter valid recepeintEmail as \u0027kavyakalathuru1998@gmail.com\u0027 and recepientName as \u0027kavyakalathuru\u0027 and message as \u0027want to buy a mobile\u0027(file:///C:/Users/USER/eclipse-workspace/ProductStoreBDD2/src/main/resources/feature/Login.feature:32)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I should get complete contact filling popup message as \u0027Thanks for the message!!\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_should_get_complete_contact_filling_popup_message_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "Below are the common steps for the scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with productstore page.",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_have_browser_with_productstore_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Contact Blank fill",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I will not enter valid recepientEmail as \u0027\u0027 and recepientName as \u0027\u0027 and message as \u0027\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_will_not_enter_valid_recepientEmail_as_and_recepientName_as_and_message_as(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get popup message without filling details as \u0027Thanks for the message!!\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_should_get_popup_message_without_filling_details_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Below are the common steps for the scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with productstore page.",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_have_browser_with_productstore_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "selecting a product in the home page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on the product in home page and click on add to cart",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_click_on_the_product_in_home_page_and_click_on_add_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get a popup message as \u0027Product added\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_should_get_a_popup_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Below are the common steps for the scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with productstore page.",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_have_browser_with_productstore_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deleting a product from the cart",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on delete",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_click_on_delete()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The product should be deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.the_product_should_be_deleted()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Below are the common steps for the scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with productstore page.",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_have_browser_with_productstore_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Placing order",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on place order",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_click_on_place_order()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "it should display form for filling details",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.it_should_display_form_for_filling_details()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Below are the common steps for the scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with productstore page.",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_have_browser_with_productstore_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Filling all details for purchase",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I enter my name as \u0027ooha\u0027 and country as \u0027India\u0027 and city as \u0027Nellore\u0027 and credit card as \u0027605385697632\u0027 and month as \u0027nov\u0027 and year as \u00272022\u0027 and click on purchase order",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_enter_my_name_as_and_country_as_and_city_as_and_credit_card_as_and_month_as_and_year_as_and_click_on_purchase_order(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "It should display purchase details popup message as \u0027Thank you for your purchase!\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.it_should_display_purchase_details_popup_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Below are the common steps for the scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with productstore page.",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_have_browser_with_productstore_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Blank name or Credit card",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I enter the name as \u0027\u0027 and country as \u0027India\u0027 and city as \u0027Nellore\u0027 and credit card as \u0027\u0027 and month as \u0027nov\u0027 and year as \u00272022\u0027 and click on purchase order",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_enter_the_name_as_and_country_as_and_city_as_and_credit_card_as_and_month_as_and_year_as_and_click_on_purchase_order(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "It should display a popup message as \u0027Please fill out Name and Creditcard.\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.it_should_display_a_popup_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Below are the common steps for the scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with productstore page.",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_have_browser_with_productstore_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Filling all the details and click on close",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I enter the name in purchase detail  as \u0027kavya\u0027 and country as \u0027India\u0027 and city as \u0027Nellore\u0027 and credit card as \u0027605385697632\u0027 and month as \u0027nov\u0027 and year as \u00272022\u0027 and click on purchase order and click on close",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_enter_the_name_in_purchase_detail_as_and_country_as_and_city_as_and_credit_card_as_and_month_as_and_year_as_and_click_on_purchase_order_and_click_on_close(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check for home page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.check_for_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Below are the common steps for the scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with productstore page.",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_have_browser_with_productstore_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Filling all the userdetails and click on close button",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I enter the useer name as \u0027kavya\u0027 and country as \u0027India\u0027 and city as \u0027chirala\u0027 and credit card as \u0027605385697632\u0027 and month as \u0027nov\u0027 and year as \u00272022\u0027 and click on purchase order and click on close",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_enter_the_useer_name_as_and_country_as_and_city_as_and_credit_card_as_and_month_as_and_year_as_and_click_on_purchase_order_and_click_on_close(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "It should go back to the cartpage and assert for \u0027PRODUCT STORE\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.it_should_go_back_to_the_cartpage_and_assert_for(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Below are the common steps for the scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with productstore page.",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_have_browser_with_productstore_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Valid signUp",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I enter username as \u0027sulochana@gmail.com\u0027 and Password as \u0027sulochana\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_enter_username_as_and_Password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should click on signUp",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_should_click_on_signUp()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [Sign up successful.] but found [This user already exist.]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:575)\r\n\tat org.testng.Assert.assertEquals(Assert.java:585)\r\n\tat com.cts.stepdefinition.StepDefinition.i_should_click_on_signUp(StepDefinition.java:614)\r\n\tat ✽.I should click on signUp(file:///C:/Users/USER/eclipse-workspace/ProductStoreBDD2/src/main/resources/feature/Login.feature:60)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "Below are the common steps for the scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with productstore page.",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_have_browser_with_productstore_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Already exsisted user for SignUp",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I enter the already used username as \u0027kavyakalathuru12@gmail.com\u0027 and password as \u0027kavyakalathuru\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_enter_the_already_used_username_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should click on signup and I should get popup message as \u0027This user already exist.\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_should_click_on_signup_and_I_should_get_popup_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Below are the common steps for the scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with productstore page.",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_have_browser_with_productstore_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Empty username and password for signup",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I will not enter the username \u0027\u0027 and i will not enter the password \u0027\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_will_not_enter_the_username_and_i_will_not_enter_the_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.55.104\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002710.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\USER\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:52878}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 2c63eeedaf8820ae3fb81338128ee7ed\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat com.cts.productstorepages.signUpPage.againClickOnSignUp(signUpPage.java:30)\r\n\tat com.cts.stepdefinition.StepDefinition.i_will_not_enter_the_username_and_i_will_not_enter_the_password(StepDefinition.java:656)\r\n\tat ✽.I will not enter the username \u0027\u0027 and i will not enter the password \u0027\u0027(file:///C:/Users/USER/eclipse-workspace/ProductStoreBDD2/src/main/resources/feature/Login.feature:65)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I should click on signup and I should get the popup message as \u0027Please fill out Username and Password.\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_should_click_on_signup_and_I_should_get_the_popup_message_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "Below are the common steps for the scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with productstore page.",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_have_browser_with_productstore_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "checking categories for Phones",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on mobile phones it will show only mobile phones",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_click_on_mobile_phones_it_will_show_only_mobile_phones()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for mobile phone visibility for assertion",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_search_for_mobile_phone_visibility_for_assertion()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Below are the common steps for the scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with productstore page.",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_have_browser_with_productstore_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "checking categories for Laptops",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on laptops it will show only Laptops",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_click_on_laptops_it_will_show_only_Laptops()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for laptops visibility for assertion",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_search_for_laptops_visibility_for_assertion()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Below are the common steps for the scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with productstore page.",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_have_browser_with_productstore_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "checking categories for Monitors",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on monitors it will show only monitors",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_click_on_monitors_it_will_show_only_monitors()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for monitors visibility for assertion",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_search_for_monitors_visibility_for_assertion()"
});
formatter.result({
  "status": "passed"
});
});