// Task1: Error is caught and handled in inner catch block
try {
    try {
      throw new Error("oops");
    } catch (ex) {
      console.error("inner", ex.message); // Error is handled here
    } finally {
      console.log("finally");
    }
  } catch (ex) {
    // This block is not executed
    console.error("outer", ex.message);
  }
  
  // Task2: Error is caught, re-thrown, and handled in outer catch block
  try {
    try {
      throw new Error("oops");
    } catch (ex) {
      console.error("inner", ex.message); // Error is caught here
      throw ex; // Error is re-thrown
    } finally {
      console.log("finally");
    }
  } catch (ex) {
    console.error("outer", ex.message); // Error is handled here
  }