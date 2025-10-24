import React, { useContext } from "react";
import Swal from "sweetalert2";
import AuthContext from "../../Auth/AuthContext";

const AddSpot = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const newTouristSpot = {
      image: form.image.value,
      tourists_spot_name: form.tourists_spot_name.value,
      country_Name: form.country_Name.value,
      location: form.location.value,
      short_description: form.short_description.value,
      average_cost: form.average_cost.value,
      seasonality: form.seasonality.value,
      travel_time: form.travel_time.value,
      totalVisitorsPerYear: form.totalVisitorsPerYear.value,
      userEmail: user?.email,
      userName: user?.displayName,
    };

    console.log(newTouristSpot);

    fetch("https://epic-escapes-server-hmq23n7jh-yeasirs-projects.vercel.app/addSpot", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTouristSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Tourist Spot added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to add tourist spot",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <div className="container mx-auto px-4 md:px-24 py-12">
      <h1 className="text-4xl md:text-6xl mb-5 text-center font-bold">
        Add Your Tourist Spot
      </h1>
      <p className="mb-8 w-full md:w-3/4 mx-auto text-center text-gray-600">
        Share your favorite destinations with the world! Fill in the details
        below to add a new tourist spot to our collection. Help fellow travelers
        discover amazing places.
      </p>

      <div className="bg-base-200 p-8 rounded-lg">
        <form onSubmit={handleSubmit}>
          {/* Image URL */}
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text text-xl font-medium">Image URL</span>
            </label>
            <input
              type="text"
              placeholder="Enter image URL"
              className="input input-bordered w-full"
              name="image"
              required
            />
          </div>

          {/* Tourist Spot Name & Country Name */}
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-medium">
                  Tourist Spot Name
                </span>
              </label>
              <input
                type="text"
                placeholder="e.g., Cox's Bazar"
                className="input input-bordered w-full"
                name="tourists_spot_name"
                required
              />
            </div>
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-medium">
                  Country Name
                </span>
              </label>
              <select
                className="select select-bordered w-full"
                name="country_Name"
                required
              >
                <option value="">Select Country</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Thailand">Thailand</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Cambodia">Cambodia</option>
              </select>
            </div>
          </div>

          {/* Location & Average Cost */}
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-medium">Location</span>
              </label>
              <input
                type="text"
                placeholder="e.g., Chittagong Division"
                className="input input-bordered w-full"
                name="location"
                required
              />
            </div>
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-medium">
                  Average Cost (USD)
                </span>
              </label>
              <input
                type="number"
                placeholder="e.g., 500"
                className="input input-bordered w-full"
                name="average_cost"
                required
              />
            </div>
          </div>

          {/* Seasonality & Travel Time */}
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-medium">
                  Seasonality
                </span>
              </label>
              <select
                className="select select-bordered w-full"
                name="seasonality"
                required
              >
                <option value="">Select Season</option>
                <option value="Summer">Summer</option>
                <option value="Winter">Winter</option>
                <option value="Spring">Spring</option>
                <option value="Autumn">Autumn</option>
                <option value="Rainy">Rainy</option>
                <option value="Year-round">Year-round</option>
              </select>
            </div>
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-medium">
                  Travel Time
                </span>
              </label>
              <input
                type="text"
                placeholder="e.g., 7 days"
                className="input input-bordered w-full"
                name="travel_time"
                required
              />
            </div>
          </div>

          {/* Total Visitors Per Year */}
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text text-xl font-medium">
                Total Visitors Per Year
              </span>
            </label>
            <input
              type="number"
              placeholder="e.g., 10000"
              className="input input-bordered w-full"
              name="totalVisitorsPerYear"
              required
            />
          </div>

          {/* Short Description */}
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text text-xl font-medium">
                Short Description
              </span>
            </label>
            <textarea
              placeholder="Describe the tourist spot..."
              className="textarea textarea-bordered w-full h-24"
              name="short_description"
              required
            ></textarea>
          </div>

          {/* User Email & User Name (Read-only) */}
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-medium">
                  User Email
                </span>
              </label>
              <input
                type="email"
                value={user?.email || ""}
                className="input input-bordered w-full bg-base-300"
                name="userEmail"
                readOnly
              />
            </div>
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-medium">
                  User Name
                </span>
              </label>
              <input
                type="text"
                value={user?.displayName || ""}
                className="input input-bordered w-full bg-base-300"
                name="userName"
                readOnly
              />
            </div>
          </div>

          {/* Submit Button */}
          <input
            type="submit"
            value="Add Tourist Spot"
            className="btn btn-primary btn-block mt-6 text-lg"
          />
        </form>
      </div>
    </div>
  );
};

export default AddSpot;
