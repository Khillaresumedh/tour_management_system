import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookNowCondition.css";
import "./BookPacakageCondition.css";

export default function BookNowCondition() {
  const [formfield, setformfield] = useState([
    { name: "", indian: "", adhar: "", gmail: "" },
  ]);

  const [isEnabled, setIsEnabled] = useState(0);

  const navigate = useNavigate();

  const handlebuttonpayment = () => navigate(`/PaymentPage`);
  const handelFromChnage = (event, index) => {
    let data = [...formfield];
    data[index][event.target.name] = event.target.value;
    setformfield(data);
  };
  const submit = (e) => {
    e.preventDefault();
    const someCondition = formfield.length;
    setIsEnabled(someCondition);
  };

  const removeFields = (index) => {
    let data = [...formfield];
    data.splice(index, 1);
    setformfield(data);
  };

  const addField = () => {
    let object = {
      name: "",
      adhar: "",
      gmail: "",
      indian: "",
    };
    setformfield([...formfield, object]);
  };
  return (
    <>
      <div>
        <h3 style={{ textAlign: "center" }}>Book Your Pacakage!</h3>
        <div className="container" style={{ marginTop: "8%" }}>
          <form className="row g-3" onSubmit={submit}>
            {formfield.map((form, index) => {
              return (
                <div key={index}>
                  <h3>Passenger: {index + 1} </h3>
                  <div className="col-md-12 my-3">
                    <label htmlFor="inputEmail4" className="form-label">
                      Full Name As Per ID
                    </label>
                    <input
                      type="text"
                      name="name"
                      onChange={(event) => handelFromChnage(event, index)}
                      value={form.name}
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div className="col-md-12 my-3">
                    <label htmlFor="inputPassword4" className="form-label">
                      Select Nationality
                    </label>
                    <select
                      name="indian"
                      onChange={(event) => handelFromChnage(event, index)}
                      value={form.indian}
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Select Nationality</option>
                      <option value="1">Indian</option>
                      <option value="2">Other</option>
                    </select>
                  </div>
                  <div className="col-md-12 my-3">
                    <label htmlFor="inputPassword4" className="form-label">
                      Adhar/Passport No:
                    </label>
                    <input
                      type="number"
                      name="adhar"
                      onChange={(event) => handelFromChnage(event, index)}
                      value={form.adhar}
                      className="form-control"
                      id="inputPassword4"
                      placeholder="Enter Adhar/Passport Number"
                    />
                  </div>
                  <div className="col-12 my-3">
                    <label htmlFor="inputAddress" className="form-label">
                      Gmail
                    </label>
                    <input
                      type="text"
                      name="gmail"
                      onChange={(event) => handelFromChnage(event, index)}
                      value={form.gmail}
                      className="form-control"
                      id="inputAddress"
                      placeholder="Example@gmail.com"
                    />
                  </div>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <div className="col-12 my-3 ">
                      <button
                        type="submit"
                        className="remove-btn"
                        onClick={() => {
                          removeFields(index);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="col-4 my-3">
              <button type="submit" onClick={addField} className="add-btn">
                Add Passenger
              </button>
            </div>
            <div>
              <div className="col-4 my-3">
                <button
                  type="submit"
                  onClick={() => handlebuttonpayment()}
                  className="procced-btn"
                >
                  Proceed For payment!
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="col-md-4 ">
        <div className="position-sticky">
          <div className="p-4 mb-3 bg-light rounded">
            <h4 className="fst-italic text-center">- Summary -</h4>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Arrival Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="disabledTextInput" className="form-label">
                  Quantity
                </label>
                <input
                  className="form-control bg-secondary text-white text-center"
                  type="text"
                  disabled
                  value={isEnabled}
                  aria-label="Disabled input example"
                />
              </div>
              <div className="mb-3">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Package Type</option>
                  <option value="1">Group</option>
                  <option value="2">Solo</option>
                  <option value="3">Famaily</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="disabledTextInput" className="form-label">
                  Total Amount
                </label>
                <input
                  className="form-control bg-secondary text-white text-center "
                  type="text"
                  disabled
                  aria-label="Disabled input example"
                />
              </div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
