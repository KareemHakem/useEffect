import "./style.css";

export default function Card({user}) {
  return (
    <div className="card">
      <div className="image_container">
        <img
          src="https://static.remove.bg/remove-bg-web/9ea13b909d4fdd0a9920469e7d4ed491d8a595f2/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg"
          alt="userImage"
        />
        <h3>username</h3>
      </div>
      <div className="tag_container">
        <p className="tag">email:</p>
        <p>{user.email}</p>
      </div>
      <div className="tag_container">
        <p className="tag">Address:</p>
        <div className="flex">
          <p style={{ margin:  '0px 10px' }}>{user.address.city}</p>
          <p style={{ margin:  '0px 10px' }}>{user.address.suite}</p>
          <p style={{ margin:  '0px 10px' }}>{user.address.stret}</p>
          <p style={{ margin:  '0px 10px' }}>{user.address.zipcode}</p>
        </div>
      </div>
      <div className="tag_container">
        <p className="tag">phone:</p>
        <p>{user.phone}</p>
      </div>
      <div className="company_container">
        <h3 className="tag">Company</h3>
        <div className="flex">
          <p>{user.company.name}</p>
          <p>{user.company.catchPhrase}</p>
        </div>
      </div>
    </div>
  );
}
