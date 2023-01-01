import { Formik } from "formik";
import { useRouter } from "next/router";
import BookNowButton from "./BookNowButton";
import CalenderButton from "./CalenderButton";
import styles from "./Hero.module.scss";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";
import { useState } from "react";
import { useEffect } from "react";
function HeroBookNow() {
  const router = useRouter();
  const [value, setValue] = useState(null);
  const [coordinate, setCoordinates] = useState(null);
  const [locationMy, setLocation] = useState(null);
  const [btnLock, setBtnLock] = useState(false);
  const [locationError, setLocationError] = useState("");
  useEffect(() => {
    if (value !== null) {
      geocodeByAddress(value?.label)
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => {
          setLocationError("");
          const coordinate = { ...coordinate };
          coordinate.toLatitude = lat;
          coordinate.toLongitude = lng;
          setLocation(value.label);
          setCoordinates(coordinate);
        });
    }
  }, [value]);

  return (
    <Formik
      initialValues={{
        coordinates: {
          toLatitude: 31.4646,
          toLongitude: 74.3896,
        },
        bookText: "",
      }}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting = true;
        const errorCount = 0;

        if (coordinate === null) {
          setLocationError("Location is required!");
          errorCount++;
        }

        if (errorCount > 0) {
          return true;
        }

        setLocationError("");

        setBtnLock(true);
        if (JSON.parse(sessionStorage.getItem("orderPayload"))) {
          const orderPayload = JSON.parse(
            sessionStorage.getItem("orderPayload")
          );
          orderPayload.coordinates = coordinate;
          orderPayload.bookingType = 1;
          orderPayload.location = locationMy;
          orderPayload.endDateTime = new Date();
          orderPayload.startDateTime = new Date();
          sessionStorage.setItem("orderPayload", JSON.stringify(orderPayload));
        } else {
          setBtnLock(true);
          sessionStorage.setItem(
            "orderPayload",
            JSON.stringify({
              coordinates: coordinate,
              bookingType: 0,
              location: locationMy,
              endDateTime: new Date(),
              startDateTime: new Date(),
            })
          );
        }
        setTimeout(() => {
          router.push("/services");
          setBtnLock(false);
        }, 2000);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form
          onSubmit={handleSubmit}
          className={`${styles.booknowmaincontainer}`}
        >
          <div className={`${styles.booknowcontainer}`}>
            <div className="googlesearch">
              <GooglePlacesAutocomplete
                className="asdasd"
                selectProps={{
                  value,
                  onChange: setValue,
                  styles: {
                    input: (provided) => ({
                      ...provided,
                      color: "rgba(81, 93, 112, 0.5)",
                    }),
                    option: (provided) => ({
                      ...provided,
                      color: "#003f9a",
                    }),
                    singleValue: (provided) => ({
                      ...provided,
                      color: "rgba(81, 93, 112, 0.5)",
                    }),
                  },
                }}
                apiKey="AIzaSyDYRy_ggdercsN2hHQ-gmNTu8AhV_mmsq0"
              />
            </div>
            {/* <input
              className={`${styles.input}`}
              placeholder="Spain, de la Puerta 74. City"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.bookText}
              name="bookText"
              id="booknowbtn"
            /> */}
            <BookNowButton btnLock={btnLock} />
          </div>
          <CalenderButton values={coordinate} />
          <p
            style={{
              marginTop: "100px",
              color: "red",
              fontSize: "14px",
              fontWeight: "500",
              paddingLeft: "30px",
              display: "block",
              position: "absolute",
            }}
          >
            {locationError}
          </p>
        </form>
      )}
    </Formik>
  );
}

export default HeroBookNow;
