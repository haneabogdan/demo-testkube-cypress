describe("testkube-oss", () => {
  it("Creates a new test", () => {
    cy.visit("https://demo.testkube.io/tests");

    if (cy.contains("regression-test-first-run")) {
      cy.contains("regression-test-first-run").click();
      cy.contains("Your test has no past executions. Trigger the first run!");
    } else {
      // Create new test
      cy.get('button[data-test="add-a-new-test-btn"]').click();
      // Enter test name
      cy.get('input[id="test-suite-creation_name"]').type(
        "regression-test-first-run-2"
      );

      // Select test type
      cy.get(
        `.ant-select > .ant-select-selector > .ant-select-selection-search > #test-suite-creation_testType`
      ).click();
      cy.get(
        `.ant-select .ant-select-selection-search input#test-suite-creation_testType`
      ).clear();
      cy.get(
        `.ant-select .ant-select-selection-search input#test-suite-creation_testType`
      )
        .invoke("attr", "id")
        .then((selElm) => {
          const dropDownSelector = `#${selElm}_list`;
          cy.get(
            `.ant-select .ant-select-selection-search input#test-suite-creation_testType`
          ).type("postman/collection");
          cy.get(dropDownSelector)
            .next()
            .find(".ant-select-item-option-content")
            .click();
        });

      // Select test source

      cy.get(
        `.ant-select > .ant-select-selector > .ant-select-selection-search > #test-suite-creation_testSource`
      ).click();
      cy.get(
        `.ant-select .ant-select-selection-search input#test-suite-creation_testSource`
      ).clear();
      cy.get(
        `.ant-select .ant-select-selection-search input#test-suite-creation_testSource`
      )
        .invoke("attr", "id")
        .then((selElm) => {
          const dropDownSelector = `#${selElm}_list`;
          cy.get(
            `.ant-select .ant-select-selection-search input#test-suite-creation_testSource`
          ).type("string");
          cy.get(dropDownSelector)
            .next()
            .find(".ant-select-item-option-content")
            .click();
        });

      // Write test as string
      cy.get('textarea[id="test-suite-creation_string"]').type("test content");

      // Create test
      cy.get('button[data-test="add-a-new-test-create-button"]').click();

      cy.contains("Your test has no past executions. Trigger the first run!");
    }
  });
});
