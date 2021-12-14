// /jokes/new route

export default function NewJokeRoute() {
  return (
    <div>
      <p>Add your own joke</p>
      <form method='post'>
        <div>
          <label>
            Name: <input type='text' name='name' />
          </label>
        </div>
        <div>
          <label>
            Joke: <textarea name='content' />
          </label>
        </div>
        <div>
          <button type='submit' className='button'>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
