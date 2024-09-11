import React from "react";
import "./Cprogram.css";

export default function Cprogram() {
  return (
    <div className="Ccontainer">
      <h1>My C Programming Skill</h1>
      <div className="CcontainerText">
        <p className="desc">
          "I have a foundational understanding of C programming, gained through
          coursework in college. I am familiar with core concepts such as data
          types, loops, functions, arrays, pointers, and basic memory
          management. I have worked on small projects and assignments involving
          basic algorithms{" "}
        </p>
        <div className="CcontainerDetails">
          <ol>
            <li>Data Types</li>
            <p>
              I understand the basic data types in C, such as int, float, char,
              and double. I know how they define the kind of data a variable can
              hold and the memory it occupies. I have used these in my programs
              to store different types of values, such as integers,
              floating-point numbers, characters, etc
            </p>
            <li>Loops</li>
            <p>
              I am comfortable using loops like for, while, and do-while in C to
              execute blocks of code repeatedly. I can write basic looping
              constructs to iterate over data structures, such as arrays, and
              handle tasks like summing elements, finding maximum values, or
              iterating over user input.
            </p>
            <li>Data Types:</li>
            <p>
              I understand the basic data types in C, such as int, float, char,
              and double. I know how they define the kind of data a variable can
              hold and the memory it occupies. I have used these in my programs
              to store different types of values, such as integers,
              floating-point numbers, characters, etc
            </p>
            <li>Functions:</li>
            <p>
              I understand how to define and call functions in C to modularize
              code. I’ve worked with functions that take parameters, return
              values, and use the concept of scope for variables. I can pass
              data to functions and return computed results, making my programs
              more organized and reusable.
            </p>
            <li>Arrays</li>
            <p>
              I am familiar with arrays and how they are used to store multiple
              values of the same type in a contiguous block of memory. I’ve
              worked with both single-dimensional arrays for basic tasks like
              storing a list of numbers, and multi-dimensional arrays like 2D
              arrays for representing data in a table form.
            </p>
            <li>Pointer:</li>
            <p>
              I have a basic understanding of pointers, their use in pointing to
              memory locations, and how they relate to arrays. I know how to
              declare pointers, use them to access the value of variables, and
              perform pointer arithmetic.
            </p>
            <li>Basic Memory Management</li>
            <p>
              I have experience using manual memory management in C, including
              allocating and freeing memory using malloc() and free(). I
              understand the importance of managing memory properly to avoid
              issues like memory leaks. I’ve also used pointers to dynamically
              allocate memory for arrays and structures.
            </p>
          </ol>
        </div>
      </div>
    </div>
  );
}
