import React from "react";
import "./Java.css";

export default function Java() {
  return (
    <div className="Ccontainer">
      <h1>My Java Programming Skill</h1>
      <div className="CcontainerText">
        <p className="desc">
          "I have a foundational understanding of Java programming, gained
          through coursework in college. I am familiar with core concepts such
          as data types, loops, functions, arrays, pointers, and basic memory
          management. I have worked on small projects and assignments involving
          basic algorithms."
        </p>
        <div className="CcontainerDetails">
          <ol>
            <li>Data Types:</li>
            <p>
              I am familiar with Java’s primitive data types, including int,
              float, double, char, and boolean. I understand how these types are
              used to store various kinds of data and how they differ in terms
              of size and range. I also know about wrapper classes such as
              Integer, Double, and Character which provide utility methods and
              can be used in collections.
            </p>
            <li>Loops:</li>
            <p>
              I know how to use loops in Java, including for, while, and
              do-while. I can implement loops to iterate through arrays,
              collections, and other data structures. I am able to use these
              loops to perform repetitive tasks such as processing elements,
              summing values, or controlling flow based on conditions.
            </p>
            <li>Functions (Methods):</li>
            <p>
              I understand how to define and use methods in Java. I am familiar
              with method signatures, including parameters, return types, and
              method overloading (having multiple methods with the same name but
              different parameters). I know how to call methods from within
              other methods and how to use static and instance methods.
            </p>
            <li> Arrays:</li>
            <p>
              I am comfortable working with arrays in Java. I know how to
              declare, initialize, and manipulate arrays to store and access
              multiple values of the same type. I have used arrays to solve
              problems like sorting and searching, and I understand the concept
              of array length and indexing.
            </p>
            <li>Pointers (References in Java):</li>
            <p>
              While Java does not have pointers like C, I understand the concept
              of references. I know how objects are managed in memory and how
              references are used to access and manipulate objects. I am
              familiar with how Java handles memory management through its
              garbage collection mechanism.
            </p>
            <li>Basic Memory Management:</li>
            <p>
              In Java, I am aware of how memory management is handled through
              the garbage collector, which automatically deallocates memory that
              is no longer in use. I understand the importance of managing
              object references and how to optimize memory usage by avoiding
              unnecessary object creation and keeping references to objects only
              as long as needed.
            </p>

          </ol>
        </div>
      </div>
    </div>
  );
}
