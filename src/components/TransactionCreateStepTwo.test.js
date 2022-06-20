import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

/* test('on second level trascation button', async () => {
    
    render(<TransactionCreateStepTwo sender={{ id: 5 }} receiver={{id:2}}/>);
    
    //screen.debug() //screen assertions
   // screen.getByRole('')
    
    expect(await screen.findByRole('button',{name: /pay/i})).not.toBeEnabled()
})
 */

test("when amount and note is entered, is the button still enabled ?", async () => { //Integration Test
  //this test process follows the following phase patterns
  //ARRANGE -- arranging the components
  //ACT  --  userEvents, typing, clicking
  //ASSERT  -- make your assertions

  render(<TransactionCreateStepTwo sender={{ id: 6 }} receiver={{ id: 5 }} />);
  //screen.debug();
  //screen.getByRole("");
  expect(await screen.findByRole("button", { name: /pay/i })).not.toBeEnabled(); //Unit test
  userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
  userEvent.type(screen.getByPlaceholderText(/Add a note/i), "regards");
  //screen.debug();
  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled(); //Unit test
});

/* 
it("If an amount and note is entered, the pay button is enabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: 5 }} receiver={{ id: 2 }} />);

  expect(await screen.findByRole("button", { name: /pay/i })).not.toBeEnabled();

  userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner");

  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
}); */
