import React from 'react';

function MonFooter({ nom, prenom, session }) {
  return (
    <footer>
      <p>Nom: {nom}</p>
      <p>Prénom: {prenom}</p>
      <p>Session: {session}</p>
    </footer>
  );
}

export default MonFooter;
