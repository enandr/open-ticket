import React from 'react';

export default function LogOut(props) {

  function changeView() {
    props.setView('logIn');
  }

  function deleteSession() {
    fetch('api/logout')
      .catch(error => alert(error));
    changeView();
  }
  return (
    <button type="button" className="btn btn-primary btn-lg clickable" onClick={deleteSession}>Log Out</button>
  );
}
