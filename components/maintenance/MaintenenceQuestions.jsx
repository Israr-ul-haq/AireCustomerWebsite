import MaintenenceQuestion from "./MaintenenceQuestion";
import globalStyles from "../shared/Shared.module.scss";
function MaintenenceQuestions({ handleChange, values, errors }) {
  return (
    <div className={`${globalStyles.mb_60}`}>
      <MaintenenceQuestion
        handleChange={handleChange}
        values={values}
        questionNumber={1}
        questionText={
          "   ➢ If the unit is not cooling. Turn the unit off and wait for technician"
        }
        noText="Turn the unit off and wait for the technician"
        isNoText={"no"}
      />
      <MaintenenceQuestion
        handleChange={handleChange}
        values={values}
        questionNumber={2}
        questionText={
          "   ➢ If the unit is located in the attic, Book for a morning appointment due to heat. Technicians will not be able to perform work If booking are made after 10am (does not apply on cooler days)   "
        }
        noText="Please book before 10am due to heat"
        isNoText={"no"}
      />
      <MaintenenceQuestion
        handleChange={handleChange}
        values={values}
        questionNumber={3}
        questionText={
          "   ➢ If you live in a condo or apartment please get roof access before making the booking so technician can do a full diagnosis of the unit."
        }
        noText="Please turn off unit and wait till the coil is not frozen to request service."
        isNoText={"no"}
      />
      <MaintenenceQuestion
        handleChange={handleChange}
        values={values}
        questionNumber={4}
        questionText={
          "   ➢ If the unit is leaking water please turn unit off and wait for technician."
        }
        noText="Please gain access and book technician."
        isNoText={"no"}
      />

      <MaintenenceQuestion
        handleChange={handleChange}
        values={values}
        questionNumber={4}
        questionText={
          "   ➢ If you see ice build up. please shut the unit off and wait for ice to fully deforst. Technicians will not be able to service unit if coil is frozen."
        }
        noText="Please gain access and book technician."
        isNoText={"no"}
      />
      <MaintenenceQuestion
        handleChange={handleChange}
        values={values}
        questionNumber={4}
        questionText={
          "   ➢ Clear any obstruction there may be infront, near or around the unit."
        }
        noText="Please gain access and book technician."
        isNoText={"no"}
      />
      <MaintenenceQuestion
        handleChange={handleChange}
        values={values}
        questionNumber={4}
        questionText={
          "   ➢ If there is a tall ladder required or any important information please write it in the notes"
        }
        noText="Please gain access and book technician."
        isNoText={"no"}
      />
      {/* <p
        style={{
          marginTop: "5px",
          color: "red",
          fontSize: "12px",
          fontWeight: "500",
          paddingLeft: "0",
        }}
      >
        {errors.questions}
      </p> */}
    </div>
  );
}
export default MaintenenceQuestions;
