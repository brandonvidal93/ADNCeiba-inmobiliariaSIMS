import React from 'react';
import { Dialog } from '@material-ui/core';
import { render } from '@testing-library/react';

const DialogTest = () => {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button type="button" onClick={handleClickOpen}>
        Open dialog
      </button>
      <Dialog data-testid="dialog-testid" open={open} onClose={handleClose}>
        <div data-testid="inside-testid">Dialog content</div>
      </Dialog>
    </>
  );
};

test('Dialog', () => {
  const { getByTestId } = render(<DialogTest />);

  expect(getByTestId('inside-testid')).toHaveTextContent('Dialog content');
});
