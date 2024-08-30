---
id: tutorial6
title: Tutorial 6 - Process Management, Aliases & Shell Scripting
sidebar_position: 7
description: Tutorial 6 for Students to Process Management, Aliases and Shell Scripting
---

# Tutorial 6: Process Management, Aliases and Shell Scripting

## Main Objectives of this Practice Tutorial

- Define term **process** as it relates to the Unix/ Linux operating system
- **Run** and **terminate** processes in the foreground and background
- **Display** and **manipulate** background and foreground processes
- Use **alias** command in Unix/Linux
- Use **user-defined** variables in shell scripts.
- Use **Command Substitution** and **Math Operations** in shell scripts
- Explain the purpose of the **$?** exit status and the **test** command.
- Use **if** and **if-else** logic statements in shell scripts.
- Use a **for** loop statement with a list in shell scripts.

## Tutorial Reference Material

**Course Slides:**

- Week 8 Lecture 1 Notes: [Web](https://docs.google.com/presentation/d/e/2PACX-1vTnoltDJ38VRcEEmhp4blWj9scxdTZNS5BlcdJyHxfaIdiujDqTHJGbaaQ7VBdE9BoHjqE-OoOwQMjQ/pub?start=false&loop=false&delayms=3000)
- Week 8 Lecture 2 Notes: [Web](https://docs.google.com/presentation/d/e/2PACX-1vSxu0ITphS9FjsTxuCn2kTsnZStNTyryggGRVT9-bQu5QB23kRnaTKUUdQzPaFeEpG54jzbgckJ_jBG/pub?start=false&loop=false&delayms=3000)

**Managing Processes:**

- [Manipulating Processes](https://opensource.com/article/18/9/linux-commands-process-management)

**Linux Commands:**

| [ps](http://man7.org/linux/man-pages/man1/ps.1.html) | [top](http://man7.org/linux/man-pages/man1/top.1.html) | [fg](http://man7.org/linux/man-pages/man1/fg.1p.html) | [bg](http://man7.org/linux/man-pages/man1/bg.1p.html) | [jobs](http://man7.org/linux/man-pages/man1/jobs.1p.html) | [kill](http://man7.org/linux/man-pages/man1/kill.1.html) | [sleep](https://man7.org/linux/man-pages/man1/sleep.1.html) | [alias](http://linuxcommand.org/lc3_man_pages/aliash.html) , [unalias](https://man.linuxreviews.org/man1p/unalias.1p.html) |
| :--------------------------------------------------- | :----------------------------------------------------- | :---------------------------------------------------- | :---------------------------------------------------- | :-------------------------------------------------------- | :------------------------------------------------------- | :---------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------- |

**Control Flow Statements:**

| [Purpose](https://en.wikipedia.org/wiki/Control_flow) | [test command](https://www.computerhope.com/unix/test.htm) | [if statement](<https://ryanstutorials.net/bash-scripting-tutorial/bash-if-statements.php#:~:text=If%20statements%20(and%2C%20closely%20related,conditions%20that%20we%20may%20set.)>) | [if-else statement](https://www.tutorialspoint.com/unix/if-else-statement.htm) | [for loop](https://www.cyberciti.biz/faq/bash-for-loop/#:~:text=A%20'for%20loop'%20is%20a,files%20using%20a%20for%20loop.) |
| :---------------------------------------------------- | :--------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------- |

**Instructional Videos:**

- [Processes and Jobs](https://www.youtube.com/watch?v=q93POTgH-aQ&list=PLU1b1f-2Oe90TuYfifnWulINjMv_Wr16N&index=7)

## Key Concepts

### Managing Processes

All **commands/programs (tasks)** that are **running** on a Unix/Linux computer system are referred to as **processes**.

**Characteristics of Processes:**

- Each process has an **owner**
- Each process has a unique ID (**PID**)
- Processes keep their _PID_ for their **entire life**.
- Usually a parent sleeps (_suspends_) when a child is running (the exception is when the child process is running in the background)
- UNIX / Linux processes are **hierarchical**. The process structure can have **child processes, great grandchild processes**, etc.

Users can **manage processes** to become more **productive** while working in the Unix / Linux Command-line environment. Processes that run in the terminal are known as **foreground** processes. You can run or send processes currently running in the _foreground_ to the **background** to free-up your terminal (e.g. issue other Linux commands).

Below are a listing of common **Linux commands** and **keyboard shortcuts** to manage foreground and background processes:

| **Linux Command / Key Combination** | **Purpose**                                                                                                                                                                                                                                                                                                                                              |
| :---------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ps**                              | Displays snapshot information about processes. _Examples:_ **ps** , **ps -l** , **ps -ef** , **ps -u** , **ps aux**                                                                                                                                                                                                                                      |
| **top**                             | The **top** command provides a realtime status of running processes. **NOTE:** You can press **ctrl-c** to exit                                                                                                                                                                                                                                          |
| **ctrl-c**                          | **Terminates** a process running in the foreground                                                                                                                                                                                                                                                                                                       |
| **ctrl-z**                          | Sends a process running in the foreground into the **background**.                                                                                                                                                                                                                                                                                       |
| **fg**                              | Moves a background job from the current environment into the foreground. _Example:_ **fg %job-number**                                                                                                                                                                                                                                                   |
| **bg**                              | Runs (starts) the most recent process that was placed into the background. _Example:_ **bg %job-number**                                                                                                                                                                                                                                                 |
| **jobs**                            | The **jobs** utility displays the **status** of jobs that were started in the current shell environment. _Example:_ jobs \[1\]+ Stopped vim a <-- Job \#1 (+ most recent process / background) \[2\] Running sleep 200 & <-- Job \#2 \[3\] Running sleep 300 & <-- Job \#3 \[4\]- Running sleep 400 & <-- Job \#4 (- second recent process / background) |
| **kill**                            | The kill command sends the specified signal to the specified processes or process groups. If no signal is specified, the **TERM** signal is sent. The default action for this signal is to terminate the process. _Examples:_ **kill PID** , **kill -9 PID** , **kill %job-number** , **kill -9 %job-number**                                            |

### Aliases

An **alias** is a **nickname** to an existing command or group of commands.

An alias existing in **system memory** and will be **lost** when your current Linux session ends, unless the alias is set in a **start-up file** (e.g. **~/.bashrc**. You will learn about using start-up files later in this course.

_Examples:_

```bash
alias
```

(Alias command without an argument will display all the aliases currently set)

```bash
alias dir=ls
```

```bash
alias ls='ls -al'
```

```bash
alias clearfile='cat /dev/null >'
```

```bash
unalias alias-name
```

(removes alias from memory)

### Positional Parameters

A **positional parameter** is a variable within a shell program; its value is set from arguments contained in a shell script or using the set command.

Positional parameters are numbered and their values are accessed by using a preceding "**\$**" (eg. **\$1**, **\$2**, **\$3**, etc.). The positional parameter **\$0** refers to either the **name of shell** where command was issued, or **filename of shell script** being executed. If using **positional parameters** greater than **9**, then you need to include number within braces.

Examples: **echo ${10}, ls ${23}**

The **shift** command can be used with positional parameters to shift positional parameters to the left by one or more positions.

There are a couple of ways to assign values as positional parameters:

- Use the **set** command with the values as argument after the set command
- Run a shell script containing arguments

There are a group of **special parameters** that can be used for shell scripting. A few of these special parameters and their purpose are displayed below: **\$\*** , **“\$\*”** , **"\$@"** , **\$\#** , **\$?**

```bash
set 10 9 8 7 6 5 4 3 2 1
```

```bash
echo $1
10
```

```bash
echo $2
9
```

```bash
echo $10
100
```

```bash
echo ${10}
1
```

```bash
echo $#
10
```

```bash
shift
```

```bash
echo $#
9
```

```bash
echo $*
9 8 7 6 5 4 3 2 1
```

```bash
shift 5
```

```bash
echo $#
4
```

```bash
echo $*
4 3 2 1
```

Examples of using **positional** and **special** parameters. ^

### Command Substitution

_**Command substitution** is a facility that allows a command to be run and its output to be pasted back on the command line as arguments to another command_. Reference: https://en.wikipedia.org/wiki/Command_substitution

_Usage:_

**command1 $(command2)**

or

**command1 `command2`**

_Examples:_

```bash
file $(ls)
```

```bash
mail -s "message" $(cat email-list.txt) < message.txt
```

```bash
echo "The current directory is $(pwd)"
```

```bash
echo "The current hostname is $(hostname)"
```

```bash
echo "The date is: $(date +'%A %B %d, %Y')"
```

Example of how a **for loop with command substitution** works:

```bash
ls
file1 file2 file3 for-command-substitution.bash
```

```bash
cat for-command-substitution.bash
#!/bin/bash
```

```bash
for var in $(ls)
do
  echo "Filename is: $var"
done
```

```bash
./for-command-substitution.bash
Filename is: file1
Filename is: file2
Filename is: file3
Filename is: for-command-substitution.bash
```

### Math Operations

In order to make math operations work, we need to convert numbers stored as **text** into **binary** numbers.

We can do this by using 2 pairs of round brackets **(( ))**.

_Examples:_

```bash
num1=5;num2=10
echo “$(($num1 + $num2))”
15
echo “$((num1-num2))”
-5
((product=num1*num2))
echo “$product”
50
```

| **Operator** | **Description**           |
| :----------- | :------------------------ |
| +            | Addition                  |
| -            | Subtraction               |
| \*           | Multiplication            |
| /            | Division                  |
| %            | Remainder                 |
| \*\*         | Exponential               |
| ++           | Increment (increase by 1) |
| --           | Decrement (decrease by 1) |

### Control Flow Statements

**Control Flow Statements** are used to make your shell scripts more **flexible** and can **adapt** to changing situations.

In order to use control flow statements, you need to test a condition to get **TRUE** (zero value) or **FALSE** (non zero value). This can be done two ways:

- Run a command to get the exit status (**\$?**)
- Use the **test** command

Refer to the shell script below to see how to use the test command.

```bash
num1=5
```

```bash
num2=10
```

```bash
test $num1 -eq $num2
```

```bash
echo $?
1

```

```bash
test $num1 -lt $num2
```

```bash
echo $?
0

```

```bash
test $num1 -ne $num2
```

```bash
echo $?
0

```

```bash
test $num1 -ge $num2
```

```bash
echo $?
1
```

Examples of simple comparisons using the test command. ^

```bash
mkdir mydir
```

```bash
test -d mydir
```

```bash
echo $?
0
```

```bash
touch myfile.txt
```

```bash
test -f myfile.txt
```

```bash
echo $?
0
```

```bash
test ! -f myfile.txt
```

```bash
echo $?
1
```

```bash
test -s myfile.txt
```

```bash
echo $?
1
```

```bash
test ! -s myfile.txt
```

```bash
echo $?
0
```

Examples of using additional comparisons using the test command. ^

You CANNOT use the < or > symbols when using the test command since these are redirection symbols. Instead, you need to use **options** when performing numerical comparisons. Refer to the diagrams to the right **test options** and their purposes.

**Logic Statements**

A **logic statement** is used to determine which Linux commands are executed basedon the result of a condition: **TRUE** (zero value) or **FALSE** (non-zero value).

There are several logic statements, but we will just concentrate on the if statement.

```bash
if test condition
  then
     command(s)
fi
```

Refer to the shell script below for using the **if logic statement** with the **test** command.

```bash
cat if.bash
#!/bin/bash

read -p "Enter First Number: " num1

read -p "Enter Second Number: " num2

if test $num1 -lt $num2
then
  echo "Less Than"
fi
```

```bash
./if.bash
Enter First Number: 5
Enter Second Number: 10
Less Than
```

```bash
./if.bash
Enter First Number: 10
Enter Second Number: 5
```

Example of using the **if** logic control-flow statement.

**if-else statement:**

Unlike using an _if_ statement, an **if-else** statement take **two different sets of actions** based on the results of the test condition.

_Example:_

```bash
if test condition
  then
     command(s)
  else
     command(s)
fi
```

Example of how an **if-else** control-flow statement:

```bash
cat if-else.bash
#!/bin/bash

read -p "Enter First Number: " num1

read -p "Enter Second Number: " num2

if [ $num1 -lt $num2 ]
then
  echo "Less Than"
else
  echo "Greater Than or Equal To"
fi
```

```bash
./if.bash
Enter First Number: 3
Enter Second Number: 5
Less Than
```

```bash
./if.bash
Enter First Number: 5
Enter Second Number: 3
Greater Than or Equal To
```

**Loop Statements**

_A **loop statement** is a series of steps or sequence of statements executed repeatedly zero or more times satisfying the given condition is satisfied._ Reference: https://www.chegg.com/homework-help/definitions/loop-statement-3

There are several loops, but we will look at the **for loop** using a **list**.

```bash
for item in list
do
    command(s)
done
```

Refer to the shell script below for an example using the for loop with a list.

```bash
cat for.bash
#!/bin/bash

for x in apples oranges bananas
do
  echo "The item is: $x"
done
```

```bash
./for.bash
The item is: apples
The item is: oranges
The item is: bananas
```

Example of using the **for** looping control-flow statement.

In this investigation, you will learn how to **manage processes** on your Matrix server.

## Investigation 1: Managing Processes

\*_ATTENTION: This online tutorial will be required to be completed by Friday in week 9 by midnight to obtain a grade of 2% towards this course_

In this investigation, you will learn how to **manage processes** on a Unix / Linux server.

**Perform the Following Steps:**

1. Make certain that you are logged into your Matrix account.
2. Issue a Linux command to confirm that you are located in your **home** directory.

   - The **sleep** command **pauses for a specified number of seconds** before returning to the shell prompt.
   - In this tutorial, we will be using this command to **simulate** the management of "long-running" processes.

3. Issue the following Linux command:

```bash
sleep 700
```

- Notice that this process will run for **700 seconds**, and is forcing the user to **wait** until this process finishes.
- A process that is **running in the terminal** is referred to as a **foreground processes**.
- The Unix/Linux system is designed to allow users to send **preemptive signals** to manage those processes.

4. Press the following **key combination** to **terminate** the command running on the terminal: `ctrl-c`

- You should notice that the process that was running in the foreground has been **interrupted** (i.e. terminated).
- **NOTE:** The **ctrl-c** key combination sends **SIGINT** (**Signal Interrupt** - which is signal **\#2**) to _terminate_ a process that is running on the terminal (i.e. a **foreground** process).

5. Reissue the Linux command:

```bash
sleep 700
```

6. Press the **key combination**: `ctrl-z`
7. You should now see output similar to what is displayed below:

```text
[1]+ Stopped sleep 700
```

- **NOTE:** This indicates that this process has been placed into the **background**.
- This is useful in order to "**free-up**" the terminal to run other Linux commands.

8. Issue the following Linux command:

```bash
jobs
```

- You should see the following output similar that was displayed above:

```text
[1]+ Stopped sleep 700
```

- This display indicates that this process (that is now in the background) has **stopped**.
- In other words, the _sleep_ command is NOT counting-down to zero to terminate.

![Process jobs 1](/img/Process-jobs1.png)

- **NOTE:** You need to use the **bg** command to **run** that process that was sent into the **background**.

9. Issue the following Linux command:

```bash
bg
```

- **NOTE:** You can use the bg command WITHOUT arguments to run recent in the background. From the **jobs** command, the process that has a plus sign "+" indicates the most recent process placed into the background.

10. Issue the following Linux command:

```bash
jobs
```

- You should see the following output similar that was displayed above:

```text
[1]+ sleep 700 &
```

- This display indicates that this process in the background is **running in the background** (indicated by the ampersand character "**&**"). Now this command has resume pausing until **700 seconds**.

![Process jobs 2](/img/Process-jobs2.png)

- Using the **bg** command to **run recent process** that was placed into background from using **ctrl-z** keys.

11. Issue the following Linux command:

```bash
fg
```

- You should notice that the sleep command is now running in the **foreground**.

12. Press the **key combination** to **terminate** the process running in the **foreground**: `ctrl-c`

    - You can issue Linux commands with ampersand "**&**" in your terminal to **run** processes automatically in the **background** without having to issue _ctrl-z_ and _bg_ short-cut keys.

13. Issue the following Linux commands:

```bash
sleep 500 & sleep 600 & sleep 700 &
```

14. Issue the **jobs** command. What do you notice?

    - In the jobs command output, jobs that display a plus sign (**+**) indicates the **most recent** process placed in to the background, and a minus sign (-) indicates the **second most recent** process placed into the background.
    - The **kill** command issued to terminate processes that are running in the **foreground** or **background**.
    - Issuing the kill command without options would send the **SIGTERM** signal (eg. _signal terminate_ - which is signal **\#15**).

![Process jobs 3](/img/Process-jobs3.png)

Using the **ampersand** character **&** to run a **series of processes** in the background.

15. Issue the following Linux command to **terminate** the **first** job running in the background:

```bash
kill %1
```

- **NOTE**: You can specify job number preceded by percent % with the **kill**, **bg**, and **fg** commands to specify the processes' job number.

16. Issue the **jobs** command. What do you notice?

![Process jobs 4](/img/Process-jobs4.png)

- Using the kill %1 command to terminate job \#1.

17. Issue the following Linux commands:

```bash
kill %2
```

```bash
kill %3
```

18. Issue the **jobs** command (you may have to issue the _jobs_ command several times to get final result).

    - What do you notice?

19. Let's use **grouping** to run several commands in sequence within a single process.
20. Issue the following Linux command:

```bash
(sleep 400; sleep 500; sleep 600) &
```

21. Issue the **jobs** command. What do you notice? You should notice all commands are run in a group as just one process.

![Process jobs 5](/img/Process-jobs5.png)

- Using round brackets to **group** a series of commands to be run as **one process**.

22. Issue the following Linux command to terminate the first job running in the **background**:

```bash
kill %1
```

- NOTE: If issuing the kill command does not work, then you would need to send a STRONGER signal to "**kill**" (not "_SIGTERM_ - which is signal \#15") the process. The **SIGKILL** signal (signal **\#9**) would be required to do this by issuing the **kill** command with the option: **-9**.

23. Issue the **jobs** command and make certain there are no processes that are running in the **background**.

    - You can also manipulate processes by their **PID** (**process ID**). Let's terminate our Matrix Bash shell process by using the **kill** command using that processes' **PID**.

24. Issue the following Linux command:

```bash
ps
```

25. Note in the **ps** command output the PID of the process called **bash**.

- You will be using that PID when issuing the next Linux command.

26. Issue the following Linux command (using the bash processes' PID number instead of "PID"):

```bash
kill PID
```

- What did you notice?
- **FYI**: If the command did NOT work, issue the following Linux command (using the bash processes' PID number instead of "PID"):

```bash
kill -9 PID
```

In the next investigation, you will learn how to **create aliases** and **view command history** on your Matrix server.

## Investigation 2: Aliases

In this investigation, you will learn how to **manage aliases** on your Matrix account.

**Perform the Following Steps:**

1. Make certain that you are logged into your Matrix account.
2. Issue a Linux command to confirm that you are located in your **home** directory.

![Alias 1](/img/Alias-1.png)

- Issuing the **alias** command (without arguments) will display a list of existing aliases on your Unix / Linux system.

3. Issue the following Linux command:

```bash
alias | more
```

- Observe those existing aliases that have previously been declared. Take a few moments to run those aliases to see what happens.

4. Issue the following to create an alias:

```bash
alias lal='ls -al'
```

5. Issue the following alias:

```bash
lal
```

- What do you notice?

6. Issue the following to create another alias (lowercase l and h):

```bash
alias lh='ls --human-readable --size -1 -S --classify'
```

7. Issue the following command to confirm that this newly-created alias is stored in memory:

```bash
alias | grep "lh"
```

8. Issue the following alias:

```bash
lh
```

- What do you think this command does?

9. **Logout** of your Matrix account and then **login** to your Matrix account.
10. Reissue the **lal** alias. What happened?
11. Reissue the **lh** alias. What happened?
12. Issue the **alias | grep lh** command without any arguments to see if it is stored in memory.
13. Reissue the command to create the **lh** alias in **step \#6**.
14. Run the **lh** alias to confirm that it is properly set in memory.
15. Issue the following Linux command to edit your ~/.bashrc startup file:

```bash
nano ~/.bashrc
```

16. Add the following line at the **bottom** of this file:

```bash
alias lh='ls --human-readable --size -1 -S --classify'
```

17. Save your editing changes and exit your text editor.
18. **Logout** of your Matrix account, then **login** to your Matrix account.
19. Reissue the **lh** alias. What happened?
20. Issue the following Linux command: **unalias lh**
21. Run the **lh** alias to see what happens.

    - What happenned?

22. **Logout** of your Matrix account, then **login** to your Matrix account.
23. Reissue the **lh** alias. What happened? Why?
24. Reissue the **lal** alias. Why **didn't** this alias work?

    - The checking script below is designed to act as a **filter** with a **pipeline command**.
    - This will allow to check if your **lh** alias exists when it is checked in this program.

25. Issue the following Linux pipeline command:

```bash
alias | ~ops145/t6-check-1
```

- If you encounter errors, then view the feedback to make corrections, and then re-run the checking script.
- If you receive a congratulation message that there are no errors, then proceed with this tutorial.

## Investigation 3: Variables and Positional Parameters

- Unlike **Environment variables** that are used to set the environment of the shell or shell scripts, **User-created** variables are "customized" that the user can set or allow a user to set the variables' values. Let's create a Bash shell script that contain **user-created variables.**

1. Use a text editor to create a Bash shell script called **user-variables.bash**
2. Add the following lines to the beginning of the _user-variables.bash_ file:

```bash
#!/bin/bash
read -p "Enter your Full Name: " name
read -p "Enter your age (in years): " age
echo "Hello $name - You are $age years old"
```

3. Save your editing changes and exit your text editor.
4. Issue the **chmod** command to add **execute permissions** for the **user-variables.bash** file.
5. Issue the following to run the user-variables.bash Bash shell script (enter **your Full name** and **your age** when prompted):

```bash
./user-variables.bash
```

- What did you notice?

```bash
> ./user-variables.bash
Enter your Full Name: Murray Saul
Enter your age (in years): 57
Hello Murray Saul - You are 57 years old
```

6. Use a text editor to **modify** your Bash shell script called **user-variables.bash**
7. **Insert** the following lines immediately **below** the **she-bang** line:

```bash
age=25
readonly age
```

8. Save your editing changes and exit your text editor.
9. Issue the following to run the user-variables.bash Bash shell script:

```bash
./user-variables.bash
```

- What do you notice when you try to change the age variable? Why?

```bash
> ./user-variables.bash
Enter your Full Name: Murray Saul
Enter your age (in years): 57
./user-variables.bash: line 5: age: readonly variable
Hello Murray Saul - You are 25 years old
```

- A **positional parameter** is a special variable within a shell program; its value is set from **arguments** contained in a shell script or using the set command. Let's use **positional parameters** and **special parameters** in a Bash shell script.

10. Use a text editor to create a file called **parameters.bash**
11. Add the following lines to the beginning of this file:

```bash
#!/bin/bash
echo \$0: $0
echo \$2: $2
echo \$3: $3

echo \$#: $#
echo \$*: $*

shift 2
echo \$#: $#
echo \$*: $*
```

12. Save your editing changes and exit your text editor.

    - Notice how the quoting character "\" is used to display positional parameters like "**$2**" as opposed to the value stored in the second positional parameter.

13. Issue the **chmod** command to add **execute permissions** for the user for the **parameters.bash** file.
14. Issue the following to run the **user-variables.bash** Bash shell script:

```bash
./parameters.bash
```

- What happened?

```bash
> ./parameters.bash 1 2 3 4 5 6 7 8
$0: ./parameters.bash
$2: 2
$3: 3
$#: 8
$*: 1 2 3 4 5 6 7 8
$#: 6
$*: 3 4 5 6 7 8
```

- The values for some of the _positional parameters_ and _special parameters_ may NOT be displayed properly since you did NOT provide any **arguments** when running your Bash shell script.

15. Issue the following to run the user-variables.bash Bash shell script with arguments:

```bash
./parameters.bash 1 2 3 4 5 6 7 8
```

- What do you notice?

- Take some time to view the results and how the _parameters_ have changed when using the **shift** command.

In the next investigation, you will learn to use **command substitution** and **math operations** in your shell scripts.

## Investigation 4: Command Substitution and Math Operations

In this investigation, you will learn how to use **command substitution** and **math operations** in your shell scripts.

### Command Substitution

Command Substitution is a method of running a Linux command that provides **stdout** that is used as **argument(s)** for another Linux command.

_For example:_

```bash
echo "The current date and time is: $(date)"
```

Let's create a Bash shell script that uses command substitution that displays **text** and values of **environment variables** in a series of **echo** statements.

**Perform the Following Steps:**

1. Confirm that you are located in your **home** directory in your Matrix account.
2. Use a text editor to create a Bash shell script called **command-substitution.bash**
3. Add the following lines to the beginning of this file:

```bash
#!/bin/bash
echo
echo "MY ACCOUNT INFORMATION:"
echo
echo "Username: $(whoami)"
echo
echo "Current Directory: $(pwd)"
echo
```

4. Save your editing changes and exit your text editor.
5. Issue the **chmod** command to add execute permissions for the **command-substitution.bash** file.
6. Issue the following to run the user-variables.bash Bash shell script:

```bash
./command-substitution.bash
```

- Confirm that your shell script displays the correct information for your Matrix account.

```bash
> ./command-substitution.bash

MY ACCOUNT INFORMATION:

Username: murray.saul

Current Directory: /home/murray.saul
```

### Math Operations

Since you do NOT have to declare the **data-type** of a variable (as opposed to compiled program such as the C-programming language), numbers would be stored as **text** in variables. Therefore, it is important to use the construct `(( ))` to convert numbers (stored as _text_) into **numbers**.

We will now learn how to use this construct in order to perform math operations for shell scripts.

**Perform the Following Steps:**

1. Confirm that you are located in your **home** directory in your Matrix account.

   - Let's demonstrate that the Unix/Linux shell stores numbers as ascii text which can cause problems when performing math operations.

2. Issue the following Linux command from the shell:

```bash
echo "1 + 2"
```

- What did you notice?

3. To demonstrate the need for the **(( ))** construct, issue the following Linux commands (using the _math_ construct):

```bash
echo "$((1 + 2))"
```

- What did you notice?
- The **(( ))** construct converted values **1** and **2** from _text_ to **binary numbers**.
- The **$** in front of the construct **expands** the result of the calculation.

4. Issue the following Linux commands demonstrating other types of math calculations:

```bash
echo "$((2 - 3))"
```

```bash
echo "$((2 * 3))"
```

```bash
echo "$((2 / 3))"
```

```bash
echo "$((2 ** 3))"
```

- **NOTE:** You may notice that **dividing 2** by **3** shows a **zero** result. To perform decimal calculations would require the use the **awk** or **bc** Linux commands (we will **NOT** cover that method to work with _decimal numbers_ in this course).
- You can use the _math construct_ with variables as well.

5. Issue the following Linux commands demonstrating using the _math construct_ with **variables**:

```bash
num1=34
```

```bash
num2=12
```

```bash
echo "$((num1 * num2))"
```

- What did you notice?
- You can create variables and assign them values in the _math construct_ as well.

6. Issue the following Linux commands demonstrating using the math construct with variables:

```bash
num1=5
```

```bash
num2=3
```

```bash
((result = num1 ** num2))
```

```bash
echo "The result is: $result"
```

7. Use a text editor to create a Bash shell script called **dog-years.bash**
8. Add the following lines to the beginning of this file:

```bash
#!/bin/bash
echo
dogFactor=7
read -p "Please enter your age (in years): " humanYears
dogYears=$((humanYears * dogFactor))
echo "Your age in dog-years is: $dogYears"
echo
```

9. Save your editing changes and exit your text editor.
10. Issue the **chmod** command to add execute permissions for the user for the **dog-years.bash** file.
11. Issue the following to run the **dog-years.bash** Bash shell script:

```bash
./dog-years.bash
```

- Enter your age to see what happens.

```bash
> ./dog-years.bash

Please enter you age (in years): 57
Your age in dog-years is: 399
```

12. Issue the following to run a checking script:

```bash
~ops145/t6-check-2 | more
```

- If you encounter errors, make corrections and **re-run** the checking script until you receive a congratulations message, then you can proceed.

In the next investigation, you will use **control-flow statements** to allow your shell scripts to perform differently under different situations.

## Investigation 5: Control Flow Statements

In this investigation, you will learn how to use **control-flow statements** to make your shell script behave _differently_ under _different situations or conditions_.

**Perform the Following Steps:**

1. Confirm that you are located in your **home** directory in your Matrix account.
2. Issue the following Linux commands at the Bash shell prompt to assign values to several variables:

```bash
course="ULI101"
```

```bash
number1=5
```

```bash
number2=10
```

- You can test conditions by issuing **Linux commands / pipeline commands** or by using the **test** command. We will demonstrate using the **test** command in this tutorial, and then we will demonstrate how to test by issuing a _Linux command / pipeline command_ in a later tutorial.

3. Issue the following Linux command to test a condition:

```bash
test $course = "ULI101"
```

- The **$?** variable is used to store an **exit status** of the previously-issued command (including the test command).
- If the exit status is **zero**, then it indicates a _TRUE_ value and if the status is **non-zero**, then it indicates a _FALSE_ value.

4. Issue the following Linux command to view the **exit status** of the previously-issued **test** command:

```bash
echo $?
```

- Based on the _exit status_ value, is the result _TRUE_ or _FALSE_?

5. Issue the following Linux command to test another condition:

```bash
test $course = "uli101"
```

6. Issue the following Linux command to view the _exit status_ of the previously-issued **test** command:

```bash
echo $?
```

- Based on the _exit status_ value, is the result TRUE or FALSE?
- The value is non-zero (FALSE) since UPPERCASE characters are different than lowercase characters.

7. Issue the following Linux command to test another condition:

```bash
test $course != "uli101"
```

8. Issue a linux command to display the value of **$?**

   - What is the result? Why?

9. Issue the following Linux command to test a condition involving earlier assigned variables:

```bash
test $number1 > $number2
```

10. Issue a Linux command to display the value of **$?**

- **NOTE:** You will notice that something is **wrong**.
- The exit status **$?** shows a zero (TRUE) value, but the number 5 is definitely NOT greater than 10.
- The problem is that the symbols **<** and **\>** are interpreted as REDIRECTION symbols!

11. To prove this, issue the following Linux command :

```bash
ls -l 10
```

- You should notice a file called "**10**". The incorrectly issued **test** command used **redirection** to create an **empty** file and assigning the exit status variable a _TRUE_ value!
- To prevent problems when issuing the **test** command when comparing numbers, you can use the following **test options**: **-lt** (<), **-le** (<=), **-gt** (\>), **-ge** (\>=;), **-eq** (=), **-ne** (!=)

12. Issue the correct Linux command to **properly** test both values:

```bash
test $number1 -gt $number2
```

13. Issue a Linux command to display the value of **$?**.

    - You should notice that the exit status value is now _FALSE_ which is the correct result.

14. The **test** command can be substituted by **square brackets \[ \]** which contains the **test** condition within the square brackets. You need to have spaces between the brackets and the test condition; otherwise, you will get a test error.
15. To generate a **test error**, copy and paste the following **test** command:

```bash
[$number1 -gt $number2]
```

- The reason for the error was that you need **spaces** between the **square brackets** and the **test condition**.

16. Copy and paste the following (correct) **test** command:

```bash
[ $number1 -gt $number2 ]
```

17. Issue a command to view the value of the **exit status** of the previously issued **test** command. You should notice that is works properly.

    - Now that we have learned how to test conditions, let's learn about **control-flow** statements.
    - **LOGIC STATEMENTS** are used to create **different paths** or directions that the shell script will take based on the result of the **test condition**. In this tutorial,we will only focus on the **if** and **if-else** logic statements.

18. Use a text editor like vi or nano to create the text file called **if-1.bash**

(eg. `vi if-1.bash`)

19. Enter the following lines in your shell script:

```bash
#!/bin/bash
num1=5
num2=10
if [ $num1 -lt $num2 ]
then
   echo "num1 is less than num2"
fi
```

20. Save your editing session and exit the text editor (eg. with vi: press **ESC**, then type **:x** followed by **ENTER**).
21. Issue the following Linux command to add execute permissions for your shell script:

```bash
chmod u+x if-1.bash
```

22. Run your shell script by issuing:

```bash
./if-1.bash
```

- Confirm that the output indicates a correct result.

```bash
> ./if-1.bash
num1 is less than num2
```

23. Use a text editor like vi or nano to create the text file called **if-2.bash** (eg. `vi if-2.bash`)

24. Enter the following lines in your shell script:

```bash
#!/bin/bash
read -p "Enter the first number: " num1
read -p "Enter the second number: " num2
if [ $num1 -gt $num2 ]
then
   echo "The first number is greater than the second number."
fi
```

25. Save your editing session and exit the text editor (eg. with vi: press **ESC**, then type **:x** followed by **ENTER**).
26. Issue the following Linux command to add execute permissions for your shell script:

```bash
chmod u+x if-2.bash
```

27. Run your shell script by issuing:

```bash
./if-2.bash
```

- When prompted, make certain that the **first number** is greater than the **second number**. What happens?

```bash
> ./if-2.bash
Enter the first number: 2
Enter the second number: 5
>
> ./if-2.bash
Enter the first number: 5
Enter the second number: 2
The first number is greater than the second number.
```

28. Run the **./if-2.bash** Bash shell script again.

    - When prompted, make certain that the **first number** is less than or equal to the **second number**. What happens?
    - Let's use an **if-else** statement to provide an **alternative** if the first number is less than or equal to the second number.

```bash
> ./if-2.bash
Enter the first number: 2
Enter the second number: 5
>
> ./if-2.bash
Enter the first number: 5
Enter the second number: 2
The first number is greater than the second number.
```

29. Use a text editor like vi or nano to create the text file called **if-3.bash** (eg. `vi if-3.bash`)
30. Enter the following lines in your shell script:

```bash
#!/bin/bash
read -p "Enter the first number: " num1
read -p "Enter the second number: " num2
if [ $num1 -gt $num2 ]
then
   echo "The first number is greater than the second number."
else
   echo "The first number is less than or equal to the second number."
fi
```

31. Save your editing session and exit the text editor (eg. with vi: press **ESC**, then type **:x** followed by **ENTER**).
32. Issue the following Linux command to add execute permissions for your shell script:

```bash
chmod u+x if-3.bash
```

33. Run your shell script by issuing:

```bash
./if-3.bash
```

- Try running the script several times with numbers **different** and **equal** to each other to confirm that the shell script works correctly.

```bash
> ./if-3.bash
Enter the first number: 2
Enter the second number: 5
The first number is less than or equal to the second number.
>
> ./if-3.bash
Enter the first number: 5
Enter the second number: 2
The first number is greater than the second number.
>
> ./if-3.bash
Enter the first number: 2
Enter the second number: 2
The first number is less than or equal to the second number.
```

- **LOOP STATEMENTS** are a series of steps or sequence of statements executed repeatedly zero or more times satisfying the given condition is satisfied. Reference: https://www.chegg.com/homework-help/definitions/loop-statement-3
- _There are several loops, but we will look at a **for** loop using a **list**._

34. Use a text editor like vi or nano to create the text file called **for-1.bash** (eg. `vi for-1.bash`)
35. Enter the following lines in your shell script:

```bash
#!/bin/bash
echo
for x in 5 4 3 2 1
do
   echo $x
done
echo "blast-off!"
echo
```

36. Save your editing session and exit the text editor (eg. with vi: press **ESC**, then type **:x** followed by **ENTER**).
37. Issue the following Linux command to add execute permissions for your shell script:

```bash
chmod u+x for-1.bash
```

38. Run your shell script by issuing:

```bash
./for-1.bash
```

```bash
> ./for-1.bash

5
4
3
2
1
blast-off!
```

39. Use a text editor like vi or nano to create the text file called **for-2.bash** (eg. `vi for-2.bash`)
40. Enter the following lines in your shell script:

```bash
#!/bin/bash
echo
for x
do
   echo $x
done
echo "blast-off!"
echo
```

41. Save your editing session and exit the text editor (eg. with vi: press **ESC**, then type **:x** followed by **ENTER**).
42. Issue the following Linux command to add execute permissions for your shell script:

```bash
chmod u+x for-2.bash
```

43. Run your shell script by issuing:

```bash
./for-2.bash 10 9 8 7 6 5 4 3 2 1
```

```bash
./for-2.bash

blast-off!
```

```bash
./for-2.bash 5 4 3 2 1

5
4
3
2
1
blast-off!
```

- How does this differ from the previous shell script?
- You will learn in a couple of weeks more examples of using loop statements.
- Let's run a **checking-script** to confirm that both your **for-1.bash** and **for-2.bash**

44. Issue the following Linux command to run a checking script:

```bash
~ops145/t6-check-3 | more
```

- If you encounter errors, make corrections and **re-run** the checking script until you receive a congratulations message, then you can proceed.

## Linux Practice Questions

The purpose of this section is to obtain **extra practice** to help with **quizzes**, your **midterm**, and your **final exam**.

Your instructor may take-up these questions during class. It is up to the student to attend classes in order to obtain the answers to the following questions. Your instructor will NOT provide these answers in any other form (eg. e-mail, etc).

**Review Questions:**
**Process Management:\***

1. Background / Foreground Processes:

   1. Write a single Linux command to run the program called **~/clean.sh** in the **background**.
   2. Write a single Linux command to place the previously issued program in the **foreground**.
   3. Write a single Linux command to **confirm** that this program is running in the background.
   4. What **key-combination** would you issue to send that program again into the **background**?
   5. Write a single Linux command to have that process sent into the background to **continue running**?

2. Managing Background processes:

Use the following diagram to answer the accompanying questions. Each of the following questions will use the diagram below and are treated as independent situations.

```text
[1]  Stopped vim a
[2]- Stopped vim b
[3]+ Stopped vim c
```

Write a single Linux command to bring the second-recently process placed in the background into the **foreground**.

Write a single Linux command to **terminate job \#3**.

5. Write a single Linux command to display running processes in “real-time”.
6. Write a single Linux command to terminate a process that has the following PID: **22384**
7. Aliases / History:

   1. Write a linux command to create an **alias** called **ld** that issues the command: **ls -ld**
   2. Write a linux command to unset the **alias** created in the previous question.
   3. Issue a Linux command to list **history** of commands that match the pattern called **touch**.

8. Create a **table** listing each Linux command, useful options and command purpose for the following Linux commands: **ln , ps , top , fg , bg , jobs , kill , alias , unalias , history**

**Scripting:**

**Part A: Write Bash Shell Script Code**

**Write the answer to each question below the question in the space provided.**

1. Write a Bash shell script that will first set the value of a read-only variable called **dogFactor** to **7**. The script will then clear the screen and prompt the user to enter the age of a dog in human years (which will be stored into a variable called **humanYears**).

   - The script will store in a variable called **dogYears** the value of _humanYears x dogFactor_
   - The script will then clear the screen a second time and then display the age of the dog in “_dog years_”.

2. Write a Bash shell script that will clear the screen and then display all **arguments** that were entered after your Bash shell script when it was run. Also have the Bash shell script display the **number of arguments** that were entered after your Bash shell script.

**Part B: Walk-Thrus**

**Write the expected output from running each of the following Bash shell scripts You can assume that these Bash shell script files have execute permissions. Show your work.**

**Walkthru #1:**

**cat walkthru1.bash**

```bash
#!/usr/bin/bash
word1=”counter”
word2=”clockwise”
echo “The combined word is: $word2$word1”
```

WRITE ROUGH WORK AND OUTPUT FROM ISSUING:

```bash
./walkthru1.bash
```

ROUGH WORK:

OUTPUT:

**Walkthru #2:**

**cat walkthru2.bash**

```bash
#!/usr/bin/bash
echo “result1: $1”
echo “result2: $2”
echo “result3: $3”
echo “result 4:”
echo “$*”
```

WRITE ROUGH WORK AND OUTPUT FROM ISSUING:

```bash
./walkthru2.bash apple orange banana
```

ROUGH WORK:

OUTPUT:

**Walkthru #3:**

**cat walkthru2.bash**

```bash
#!/usr/bin/bash

for x in 1 2 3 4 5
do

  if [ $((x % 2)) -eq 0 ]
  then
    echo "this"
  else
    echo "that"
  fi

done
```

WRITE ROUGH WORK AND OUTPUT FROM ISSUING:

```bash
./walkthru3.bash apple orange banana
```

ROUGH WORK:

## OUTPUT:

Author: Murray Saul

License: LGPL version 3 Link: https://www.gnu.org/licenses/lgpl.html

---
