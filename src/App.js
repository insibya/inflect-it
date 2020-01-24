import React, { useState } from 'react';
import inflect from 'inflect';

const WordList = ({ wordList }) => {
	return (
		<ul>
			{wordList.map((word, idx) => {
				return (
					<ul key={idx}>
						<li key={2000 + idx}>{`${word.sing} (singular)`}</li>
						<li key={1000 + idx}>{`${word.plur} (plural)`}</li>
						<button>X</button>
					</ul>
				);
			})}
		</ul>
	);
};

function App() {
	const [ wordList, setWordList ] = useState([ { sing: 'bug', plur: 'bugs' } ]);
	const [ newWord, setNewWord ] = useState('');

	return (
		<main>
			Inflect It
			<form
				onSubmit={(ev) => {
					ev.preventDefault();
					const newEntry = {
						sing: newWord,
						plur: inflect.pluralize(newWord)
					};
					setWordList(...wordList, newEntry);
					setNewWord('');
				}}
			>
				<input type="text" value={newWord} onChange={(ev) => setNewWord(ev.target.value)} />
				<input type="submit" disabled={!newWord} value="Submit" />
			</form>
			<WordList wordList={wordList} />
		</main>
	);
}

export default App;
