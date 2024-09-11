import React from "react";
import "./python.css";
export default function Python() {
  return (
    <div className="Ccontainer">
      <h1>My Python Programming Skill</h1>
      <div className="CcontainerText">
        <p className="desc">
          "I have a foundational understanding of pyhton programming, gained
          through coursework in college. I am familiar with core concepts such
          as data types, loops, functions, arrays, pointers, and basic memory
          management. I have worked on small projects and assignments involving
          basic algorithms."
        </p>
        <div className="CcontainerDetails">
          <ol>
            <li>Data Types:</li>
            <p>
              I am familiar with Python’s built-in data types, including int,
              float, str, list, tuple, dict, and set. I understand how to use
              these types to store and manipulate various kinds of data. For
              example, I know how to perform arithmetic operations with int and
              float, handle text with str, and manage collections with list,
              tuple, dict, and set.
            </p>
            <li>Loops:</li>
            <p>
              I know how to use loops in Python, including for and while loops.
              I can use for loops to iterate over sequences such as lists,
              tuples, and strings, and while loops to execute a block of code as
              long as a condition remains true. I’m also familiar with common
              loop control statements like break, continue, and pass.
            </p>
            <li>Functions:</li>
            <p>
              I understand how to define and use functions in Python. I am
              comfortable with function definitions, arguments (both positional
              and keyword), and return values. I also know about lambda
              functions for creating small anonymous functions, and how to use
              built-in functions like map(), filter(), and reduce().
            </p>
            <li> Arrays (Lists in Python):</li>
            <p>
              In Python, I work with lists, which serve as dynamic arrays. I
              know how to create, modify, and access elements in lists, as well
              as use list methods for operations like appending, inserting,
              removing, and sorting elements. I am also familiar with list
              comprehensions for concise and efficient list operations.
            </p>

            <li>Basic Memory Management:</li>
            <p>
              Python handles memory management automatically through its garbage
              collection mechanism. I understand the basics of how Python
              manages memory, including reference counting and garbage
              collection. I am aware of the importance of managing object
              references and avoiding common pitfalls like circular references.
            </p>
          </ol>
        </div>
      </div>
    </div>
  );
}
