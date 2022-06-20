import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

/* test('on second level trascation button', async () => {
    
    render(<TransactionCreateStepTwo sender={{ id: 5 }} receiver={{id:2}}/>);
    
    //screen.debug()
   // screen.getByRole('')
    
    expect(await screen.findByRole('button',{name: /pay/i})).not.toBeEnabled()
})
 */

it("If an amount and note is entered, the pay button is enabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: 5 }} receiver={{ id: 2 }} />);

  expect(await screen.findByRole("button", { name: /pay/i })).not.toBeEnabled();

  userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner");

  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});
