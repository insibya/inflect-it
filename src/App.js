import React, { useState } from 'react';
import inflect from 'inflect';

const WordList = ({ wordList, setWordList }) => {
	return (
		<ul>
			{wordList.map((word, idx) => {
				return (
					<li key={idx}>
						<div>{`${word.sing} (singular)`}</div>
						<div>{`${word.plur} (plural)`}</div>
						<button
							onClick={() => {
								const filteredList = wordList.filter((_word) => _word.sing !== word.sing);
								setWordList(filteredList);
							}}
						>
							X
						</button>
					</li>
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
					setWordList([ ...wordList, newEntry ]);
					setNewWord('');
				}}
			>
				<input type="text" value={newWord} onChange={(ev) => setNewWord(ev.target.value)} />
				<input type="submit" disabled={!newWord} value="Submit" />
			</form>
			<WordList wordList={wordList} setWordList={setWordList} />
		</main>
	);
}

export default App;
