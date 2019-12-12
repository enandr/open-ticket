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
    <div onClick={deleteSession}>Log Out</div>
  );
}
