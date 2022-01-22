import {Redirect, Route} from 'react-router-dom'

export default function PrivateRoute({ children, isAuthed, ...rest }) {
    return (
      <Route
        {...rest}
        render={
          () => isAuthed === 'success'? children : <Redirect to="/" />
        }
      />
    );
  }