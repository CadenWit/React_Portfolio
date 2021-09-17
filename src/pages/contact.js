import React from "react";

function Contact() {
  return (
    <div>
      <form>
        <div class="form-group">
          <label for="emailAddress">Email address</label>
          <input
            type="email"
            class="form-control"
            placeholder="name@example.com"
          />
        </div>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="name" class="form-control" placeholder="First Name" />
        </div>
        <div class="form-group">
          <label for="textarea">What would you like to discuss?</label>
          <textarea class="form-control" rows="3"></textarea>
        </div>
      </form>
    </div>
  );
}

export default Contact;
