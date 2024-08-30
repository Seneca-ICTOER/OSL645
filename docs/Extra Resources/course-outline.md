OPS145 - Introduction to Linux and Unix
=======================================

OPS145 Subject Description
==========================

  Today Linux powers most servers and mobile devices.
  This subject introduces students to the use and management of Linux through the following actions:
  - Interact with Linux by typing commands on command lines and clicking on graphical user interfaces.
  - Personalize and control Linux.
  - Make personalization settings reboot persistent by saving edits to plain text files.
  - Run Linux locally on Windows or macOS.
  - From Linux running locally, connect to and manage remote Linux servers.
  - Automate repetitive tasks on Linux by creating or modifying scripts.

OPS145 Learning Outcomes
========================
Upon successful completion of this subject the student will be able to:

   1. Use Linux file system from the command line as user and administrator.
   2. Get information, configure, and manage: users, files, processes, networks, and disks.
   3. Use pipes to send output of one command as input to another.
      Use files to redirect input and output.
   4. Use regular expressions to filter, edit, and format plain text files.
   5. Search files based on file properties: ownership, time stamp, size, permissions, and more.
   6. Edit configuration files and modify scripts using command line, graphical, and web-based editors.
   7. Create, modify, and execute scripts to automate tasks for users and administrators.
   8. Backup and restore configurations for local and remote Linux systems.
   9. Create and maintain documentation for sysadmin work done using paper and digital logbooks.
  10. Detect, troubleshoot, and fix broken system configurations and network routing.

OPS145 Weekly Topics
====================

Week 1 - Introduction
======
  Concepts:
  + Linux background and open source philosophy
  + Introduction to using command line interfaces
  + Introduction to system administration
  + Understanding differences between working and failed sysadmin tasks
  + Accessing matrix server on- and off-campus
  + Logging in to matrix to do course work

  Command Line:
  + ssh to matrix
  + cp to copy notes
  + vimtutor

Week 2 - File Management
======
  Concepts:
  + Understanding how to read man pages
  + File management: create, read, update, and delete
  + Text editing
  + File system links: hard and symbolic links

  Command Line:
  + Basic navigation: pwd, cd, ls, tree
  + File management: cp, mv, rm, mkdir, rmdir, ln
  + Common utilities: cat, more, less, touch, file, find

Week 3 - Tree Navigation and Shell Expansion
======
  Concepts:
  + Understanding Linux file system using 'man 7 hier'
  + Path names: absolute and relative
  + Quotes: single and double; escaping quote expansion
  + Using shell wildcards in file name expansion
  + Command execution and history
  + Recalling and editing previous commands
  + Environment variables

  Command Line:
  + Quoting special characters
  + Shell basics: command execution and managing command history

Week 4 - Permissions
======
  Concepts:
  + Data Representation: binary and octal number system representation
  + File and directory permissions for user, group, and others
  + Shell Variables

  Command Line:
  + chmod
  + umask
  + stat

Week 5 - Filters, Pipes, and Redirection
======
  Concepts:
  + Devices: stdin, stdout, stderr, and /dev/null
  + Input and Output redirection
  + Redirection and piping

  Command Line:
  + Filter commands: head, tail, cut, sort, tr, wc, grep
  + Redirection using >, >>, <, >&, |&
  + tee

Week 6 - File Transfer and Sending Email
======
  Concepts:
  + Transferring files across network
  + Sending email from the command line
  + Sending email with file attachments
  + grep based filtering

  Command Line:
  + scp and sftp utilities
  + mail and mailx
  + Using grep with options

Week 7 - Midterm
======
  + Course Review
  + Midterm Test (20%)

Week 8 - Management of Processes and Disks
======
  Concepts:
  + Process management: view, start, suspend, and kill processes
  + Foreground and background jobs
  + Shell aliases

  Shell Scripting:
  + Positional parameters
  + Using test statements
  + Commands: echo and read
  + Simple scripts to display output and get input from user
  + Making decisions with if statement
  + Looping with for statement
  + Command Substitution / Math Operations

  Command Line:
  + ps, jobs, fg, bg, top
  + df, du, quota
  + lsblk, mount, umount

Week 9 - Regular Expressions with grep
======
  Concepts:
  + Regular expressions basics
    - Literal matching
    - Character classes
    - Using symbols: . and *
    - Anchoring

  Command Line:
  + grep

Week 10 - Regular Expressions with sed and awk
=======
  Concepts:
  + Using cut and grep
  + Filter and edit with sed
  + Filter, edit, and pretty print with awk

  Command Line:
  + cut
  + sed
  + awk

Week 11 - Scripting for System Administration
=======
  Shell Scripting:
  + Scripts for sysadmin related tasks
  + Using variables in scripts
  + Passing arguments and options to scripts
  + More test statements
  + Making decisions with if-else statements
  + Using for loop statements to loop over files in directory

Week 12 - Scripts bundled  with Linux distros
=======
  Shell Scripting:
  + Making decisions with if - elif - else statement
  + Using for loop with output from commands run in sub-shells
  + Command Substitution
  + while loop statement
  + Error-Checking with Loops
  + exit and break statements
  + export command
  + Creating and using functions in shells
  + Shell start-up files
  + Understanding scripts bundled with Linux

Week 13 - Faculty Led Interest Topic
=======
  + Tutorials and Project based on minimal Ubuntu VM due
  + Review Questions

Week 14 - Final Test
=======
  + Course Review
  + Final Test (20%)

Mode of Instruction
===================
  - Modes: In-class lecture, in-class exercises, and hands-on activity
  - Hours per week: 4
  - Room configuration: Computer lab
  - Typical scheduling pattern: Fall, Winter, and summer terms

Prescribed Texts
================
  None

Reference Material
==================
  https://matrix.senecapolytechnic.ca/~ops145

Required Supplies
=================
  None

Student Progression and Promotion Policy
========================================
  To obtain a credit in this subject, a student must:
  + Achieve an average of 50% or better for the two tests.
  + Achieve a grade of 50% or better on the overall course

  https://www.senecapolytechnic.ca/about/policies/student-progression-and-promotion-policy.html

Modes of Evaluation
===================
  Assessment Summary:
  - 30% Linux Online Tutorials:
    + 20% Weekly tutorials with due dates
    + 10% Interactive review tutorials
  - 30% Lab Quizzes (best 6 marks of 6 or more quizzes)
  - 40% Tests (2 at 20%)
