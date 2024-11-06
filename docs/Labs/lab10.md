---
id: lab10
title: Lab 10 - Advanced Shell Scripting
sidebar_position: 10
description: Lab 10 for Students to Learn Shell Scripting
---

# Lab 10: Advanced Shell Scripting

## Under Development

## Main Objectives

- Use **if-elif-else** control flow statements in a shell script.
- Use a **for** loop control using a list with **command substitution**.
- Use a **while** loop in a shell script.
- Use **getopts** to parse command line options.
- Use the **exit** statement in a shell script.
- Create users using a shell script
- Explain how to configure and use a **.bashrc** start-up file.
- Create a bash shell script to **generate multiple user accounts** from a comma separated value (.csv) file.

## Lab Reference Material

**Course Slides:**

- Week 11 Lecture 1 Notes: [Web](https://docs.google.com/presentation/d/e/2PACX-1vSnPxo_nwm38hMAUTHkwS7cQhuJWPDmN7Zm4UFd87_PTRV3nr6jvqteO_rlO1-Umgy0P8PPrYL9o0gG/pub?start=false&loop=false&delayms=3000)

**Control Flow Statements:**

- [if-elif-else](https://www.tutorialspoint.com/unix/if-else-statement.htm)
- [for Loop](https://www.cyberciti.biz/faq/bash-for-loop/#:~:text=A%20'for%20loop'%20is%20a,files%20using%20a%20for%20loop.)
- [while Loop](https://bash.cyberciti.biz/guide/While_loop)
- [Arrays](https://www.tutorialspoint.com/unix/unix-using-arrays.htm)

**Additional Statements:**

- [exit](https://www.geeksforgeeks.org/exit-command-in-linux-with-examples/#:~:text=exit%20command%20in%20linux%20is,last%20command%20that%20is%20executed.&text=After%20pressing%20enter%2C%20the%20terminal%20will%20simply%20close.)

**Startup Files:**

- [Purpose](https://www.gnu.org/software/bash/manual/html_node/Bash-Startup-Files.html)
- [Examples](http://www.linuxfromscratch.org/blfs/view/svn/postlfs/profile.html)

## Key Concepts

### if-elif-else Statement

The **elif** statement can be used to perform additional conditional tests of the previous test condition tests **FALSE**. This statement is used to make your logic control-flow statement to be more adaptable.

_How it Works:_

If the test condition returns a **TRUE** value, then the Linux Commands between **then** and **else** statements are executed.

If the test returns a **FALSE** value, then **a new condition is tested again**, and action is taken if the result is **TRUE**, then the Linux Commands between **then** and **else** statements are executed. **Additional elif statements** can be used if additional conditional testing is required . Eventually, an action will be taken when the final test condition is **FALSE**.

![If elif else](/img/If-elif-else.png)

Example of how an **if-elif-else** statement works. (Image licensed under [cc](https://creativecommons.org/licenses/by-sa/3.0/))

_Example:_

```bash
#!/bin/bash
num1=5
num2=10
if [[ $num1 –lt $num2 ]]; then
  echo “Less Than”
elif [[ $num1 –gt $num2 ]]; then
  echo “Greater Than”
else
  echo “Equal to”
fi
```

### For Loop Using Command Substitution

Let’s issue the **for** loop with a **list** using **command substitution**. In the example below, we will use command substitution to issue the ls command and have that output (filenames) become arguments for the for loop.

_Example:_

```bash
for x in $(ls); do
   echo “The item is: $x”
done
```

### While Loop

The **while** loop is useful to loop based on the result from a test condition or command result. This type of loop is very useful for **error-checking**.

_How it Works:_

_The condition/expression is evaluated, and if the condition/expression is **TRUE**, the code within … the block is executed. This repeats until the condition/expression becomes **FALSE**._ Reference: https://en.wikipedia.org/wiki/While_loop

![While loop](/img/While-loop.png)

Example of how a while loop works. (Image licensed under [cc](https://creativecommons.org/licenses/by-sa/3.0/))

_Example 1:_

```bash
#!/bin/bash
answer=10
read -p "pick a number between 1 and 10: " guess
while [[ $guess != $answer ]]; do
    read -p "Try again: " guess
done
echo "You are correct"
```

_Example 2:_

```bash
#!/bin/bash
value=1
while [[ $value -le 5 ]]; do
  echo "$value"
  ((value=value+1)) # could also use ((value++))
done
```

_Output:_

```bash
$ ./while2.bash
1
2
3
4
5
```

### Arrays

In Lab 6 you learned about **User-created** variables. Variables are used to store single values. **Arrays** store multiple values into a single variable. Arrays in Bash are 0 indexed, which means the first element of the array is 0. The following will populate the array users with usernames:

```bash
# Populate the array users with usernames
users=("tstark" "bbanner" "thor" "srogers" "nromanoff")
```

To print out the elements of the array individually you can use the array name and index number:

```bash
# Access the elements
echo "${users[0]}" # Will print tstark
echo "${users[1]}" # Will print bbanner
echo "${users[2]}" # Will print thor
echo "${users[3]}" # Will print srogers
echo "${users[4]}" # Will print nromanoff
```

While you can print out individual elements of an array (as demonstrated above), more commonly you use a **for loop** to loop through an array. The following code will print each of the users on a new line using a for loop.

```bash
# Print out each element of the array using a for loop
for user in "${users[@]}"; do
  echo $user
done
```

### Exit Statements

**exit Statement**

The **exit** statement is used to **terminate** a shell script. This statement is very useful when combined with logic in a shell script. The exit command can contain an argument to provide the exit status of your shell script.

_Example:_

```bash
if [[ $# -ne 1 ]]; then
  echo "USAGE: $0 [arg]"
  exit 1
fi
```

### Start-Up Files

**Shell configuration (start-up) files** are **scripts** that are run when you log in, log out, or start a new shell. The start-up files can be used, for example, to **set the prompt and screen display**, **create local variables**, or create temporary Linux commands (**aliases**)

The **/etc/profile** file belongs to the root user and is the first start-up file that executes when you log in, regardless of shell.

User-specific config start-up files are in the user's home directory:

- **~/.bash_profile** runs when you log in.
- The **~/.bashrc** runs when you start an interactive Bash shell.

**Logout Files**

There is a file that **resets or restores the shell environment** (including shut-down of programs running in the shell) when the user logs out of their shell. User-specific logout start-up files are in the user's home directory: **~/.bash_logout**

## Investigation 1: Additional Looping Statements

**ATTENTION: This lab must be graded by the end of your classes in Week 13 to obtain a grade of 2% towards this course.**

In this investigation, you will learn additional loop statements to allow your shell scripts to be **more efficient**.

**Perform the Following Steps:**

1. **Login** to your Ubuntu VM and open a **terminal**, and issue a Linux command to **confirm** you are located in your **home** directory.
2. Issue a command to **confirm** you are located in your home directory.

### Creating your Github Repo for your Labs

> **Important:** Update the link for the GitHub Classroom repository.

Use the following [link](https://classroom.github.com/a/tHKAizE9) to set up your lab 10 repository, and open it in GitHub Codespaces. Refer to [Lab 4](/Labs/lab4.md) for instructions. You will be using this for the BASH scripting in lab 10.

### Cloning your GitHub repository in your Ubuntu VM

Issue the following command to clone your GitHub repository into your home directory.

> **Important:** Be sure to replace `username` in the following command with YOUR GitHub username.

```bash
git clone git@github.com:OSL645/lab-10-username
```

- Issue a command to confirm the repository has been cloned on your Ubuntu VM.
- Issue a command to change into your **lab-10-username** directory.

Confirm the contents have been written to your **lab-10-username** directory. You should see the following files:

- LICENSE
- README.md
- convert.bash
- convert_test.py
- createusers.bash
- createusers_test.py
- githublogo.jpg
- tux.jpg
- ubuntu.jpg
- userinfo.csv
- users1.bash
- users1_test.py
- users2.bash
- users2_test.py
- users3.bash
- users3_test.py

### Writing users1.bash

1. In GitHub Codespaces, open the template for the Bash shell script called **users1.bash**
2. Edit _user-variables.bash_ file to contain the following:

```bash
#!/bin/bash
# Author:
# Date:
# Purpose: To print a list of users (from an array) one user at a time.
# Usage: ./users1.bash
#

# Populate the array users with usernames
users=("tstark" "bbanner" "thor" "srogers" "nromanoff")

# For each username in the array users
for user in "${users[@]}"; do

    # Use echo to display the username
    echo $user

# End for
done
```

3. Issue the **chmod** command to add **execute permission** for the **user** the **users1.bash** file.

4. Save your editing changes, stage and commit your changes to GitHub.

5. Using the **terminal in Codespaces** issue the following to run the users1.bash:

```bash
./users1.bash
```

- What did you notice?

```bash
> ./users1.bash
tstark
bbanner
thor
srogers
nromanoff
```

6. Run the Python check script in GitHub Codespaces to check your work before you commit it.

```bash
./users1_test.py
```

7. Check the exit status code. If it shows 0, it is successful.

```bash
echo $?
```

8. Save your changes. Stage and commit your changes to GitHub.

On your **Ubuntu VM**, open a **terminal** and confirm you are in your **home** directory.

9. Issue the following Linux command to change to the local clone of your GitHub repository.

```bash
cd lab-10-username
```

10. Pull your changes into your **Ubuntu VM**

```bash
git pull
```

11. Run your script and observe the output.

```bash
./users1.bash
```

12. Did it work? Is the output the same as it was from the Codespaces terminal?

### Writing users2.bash

16. Issue the following to run a checking script:

```bash
~ops145/t9-check-1
```

17. If you encounter errors, make corrections and **re-run** the checking script until you receive a congratulations message, then you can proceed.

In the next investigation, you will learn more about the **for** loop and **error-checking.**

## Investigation 2: Logic Within Loops and exit statements

### users3.bash

In this investigation, you will learn more about the **for** loop and **error-checking**.

The **exit** statement is used to terminate a shell script. This statement is very useful when combined with logic in a shell script to display an **error message** if the command was **improperly executed** and **terminate** the running of the shell script.

The _exit_ command can contain return a _value_ to provide the **exit status** of your shell script (i.e. TRUE or FALSE value).

**Perform the Following Steps:**

1. Issue a Linux command to confirm you are located in your **advanced** directory in your Matrix account.
2. Issue the following Linux command to view the **./for-1.bash** file:

```bash
more ./for-1.bash
```

- As you should have noticed from **tutorial 10** that the **for** loop can use a **list**.
- You can also use the for loop with positional parameters stored as **arguments** from an executed shell script.
- You can also use the **for** loop with a list using **command substitution**.
- Using command substitution is an effective method to loop within a shell script.
- Before creating a new shell script, let's learn to use command substitution from the Bash Shell to store arguments as positional parameters and use them for practice.

3. Issue the following linux command to set positional parameters in your current shell:

```bash
set apples oranges bananas pears
```

4. Issue the following linux command:

```bash
echo $#
```

- What do you notice? What does this value represent?

5. Issue the following linux command:

```bash
echo $*
```

- What do you notice?
- These positional parameters can be used with a for loop. To simplify things, let's create another shell script that uses **command substitution** within a **for** loop.

6. Use a text editor like vi or nano to create the text file called **for-3.bash** (eg. `vi for-3.bash`)
7. Enter the following lines in your shell script:

```bash
#!/bin/bash
clear
set 10 9 8 7 6 5 4 3 2 1
for x
do
   echo $x
done
echo "blast-off!"
```

8. Save your editing session and exit the text editor (eg. with vi: press **ESC**, then type **:x** followed by **ENTER**).
9. **Add execute permissions** for the owner of this script and **run this Bash shell script**.

   - What do you notice?
   - Let's create another shell script to **run a loop for each file** that is contained in your current directory using **command substitution**.

10. Use a text editor like vi or nano to create the text file called **for-4.bash** (eg. `vi for-4.bash`)
11. Enter the following lines in your shell script:

```bash
#!/bin/bash
clear
set $(ls)
echo "Here are files in my current directory:"
echo
for x
do
   echo "    $x"
done
```

12. Save your editing session and exit the text editor (eg. with vi: press **ESC**, then type **:x** followed by **ENTER**).
13. **Add execute permissions** and **run** this Bash shell script.

    - What do you notice?
    - We can reduce a line in our shell script by using **command substitution** in the for loop instead of using the **set** command. Let's demonstrate this in another shell script.

14. Use a text editor like vi or nano to create the text file called **for-5.bash** (eg. `vi for-5.bash`)
15. Enter the following lines in your shell script:

```bash
#!/bin/bash
clear
echo "Here are files in my current directory:"
echo
for x in $(ls)
do
   echo "    $x"
done
```

16. Save your editing session and exit the text editor (eg. with vi: press **ESC**, then type **:x** followed by **ENTER**).
17. **Add execute permissions** for this shell script and **run Bash shell script**

    - What do you notice? Does the output for this shell script differ from **for-4.bash**? Why?
    - We now want to introduce you to the use of **error-checking.**

18. Use the **more** command to view the previously-created Bash shell script **./if-5.bash** (eg. `more ./if-5.bash`)

    - Take a few moments to re-familiarize yourself with this shell script

19. Run your shell script by issuing:

```bash
./if-5.bash
```

- When prompted, enter a **letter** instead of a _number_. What happens?
- Let's edit the **for-5.bash** shell script to perform **error-checking** to force the user to enter a numeric value between **0** and **100**.
- **NOTE:** The **while** statement can be used with the **test** command (or a simple linux command or a linux pipeline command) for error checking. In our case, we will use a pipeline command with extended regular expressions. In order to loop while the result is TRUE (not FALSE), you can use the negation symbol (!) to set the test condition to the opposite.

20. Use a text editor like vi or nano to edit the text file called **./if-5.bash** (eg. `vi ./if-5.bash`)
21. Add the following lines in your shell script IMMEDIATELY AFTER the read statement to prompt the user for a mark:

```bash
while ! echo $mark | egrep "^[0-9]{1,}$" > /dev/null 2> /dev/null
do
   read -p "Not a valid number. Enter a mark (0-100): " mark
done
```

22. Save your editing session and exit the text editor (eg. with vi: press **ESC**, then type **:x** followed by **ENTER**).
23. Run your shell script by issuing:

```bash
./if-5.bash
```

24. When prompted, enter a **letter** instead of a number. What happens?

    - Does the shell script allow you to enter an invalid grade like **200** or **-6**?
    - Let's add an **additional error-checking loop** to force the user to enter a number between **0** and **100**.
    - Compound operators like **&&** and **\|\|** can be used with the test command.
    - Let's use the **\|\|** compound criteria to to NOT accept numbers **outside** of the range **0** to **100**.

25. Use a text editor like vi or nano to edit the text file called **./if-5.bash** (eg. `vi ./if-5.bash`)
26. Add the following lines in your shell script IMMEDIATELY AFTER the PREVIOUSLY ADDED error-checking **while** loop statement to **force** the user to enter a valid number (between 1 and 100):

```bash
while [ $mark -lt 0 ] || [ $mark -gt 100 ]
do
   read -p "Invalid number range. Enter a mark (0-100): " mark
done
```

27. Save your editing session and exit the text editor (eg. with vi: press **ESC**, then type **:x** followed by **ENTER**).
28. Run your shell script by issuing:

```bash
./if-5.bash
```

29. When prompted, enter a **letter** instead of a number. What happens?

    - Does the shell script allow you to enter an **invalid grade** like **200** or **-6**?
    - Let's reinforce **math operations** in a shell script (that you created in **tutorial 10**) and then incorporate math operations within a loop.

30. Use a text editor like vi or nano to create the text file called **for-6.bash** (eg. `vi for-6.bash`)
31. Enter the following lines in your shell script:

```bash
#!/bin/bash
value=1
while [ $value -le 5 ]
do
  echo "$value"
  value=value+1
done
```

32. Save your editing session and exit the text editor (eg. with vi: press **ESC**, then type **:x** followed by **ENTER**).
33. Set execute permissions for this shell script and run your shell script by issuing:

```bash
./for-6.bash
```

- **You should have noticed an error message.**

34. To demonstrate what went wrong, issue the following **commands**:

```bash
num1=5;num2=10
```

```bash
result=$num1+$num2
```

```bash
echo $result
```

- Notice that the user-defined variable stores the text "**10+5**" which is NOT the expected result of adding the number **10** and **5**.
- As you may recall in **tutorial 10**, we need to convert a number stored as text into a **binary number** for calculations (in this case, advance the value by 1 for each loop). We can accomplish this by using the math construct **(( ))**

35. To demonstrate, issue the following set of **commands**:

```bash
num1=5;num2=10
```

```bash
sum=$(($num1+$num2))
```

```bash
echo $sum
```

```bash
((product=$num1*$num2))
```

```bash
echo $product
```

- Let's correct our **for-6.bash** shell script to correctly use math operations.

36. Use a text editor like vi or nano to edit the text file called **for-6.bash** (eg. `vi for-6.bash`)
37. Edit **line 6** and replace with the following:

```bash
((value=value+1))
```

- **Note:** For those familiar with other programming languages, you can achieve the same results by using: **((value++))**

38. Save your editing session and exit the text editor (eg. with vi: press **ESC**, then type **:x** followed by **ENTER**).
39. **Run** this Bash shell script again.

    - What do you notice this time?

40. Issue the following to run a checking script:

```bash
~ops145/t9-check-2
```

41. If you encounter errors, make corrections and **re-run** the checking script until you receive a congratulations message, then you can proceed.

In the next investigation, you will learn to use the **exit** statement to **terminate the execution of a shell script** if not run with the properly number of arguments and use the **break** statement that will **terminate a loop** but NOT terminate the running of the shell script.

### Part 1: The exit Statement - Move this to users3.bash

7. Issue the following command (without arguments):

```bash
./exit.bash
```

- What did you notice?
- Since there are no arguments, the test within the running shell script returns FALSE, then an **error message** with feedback of how to properly issue the shell script with an argument and then **terminates** the Bash shell script.
- Notice that the **$0** positional parameter displays the **name** of the currently running shell script in the USAGE message. This is useful in case you decide to **change** the _name_ of the shell script at a later time.
- The symbol **\>&2** redirects **standard output** from the USAGE message to **standard error** making like a real error message.
- This "_neat redirection trick_" will NOT be considered for evaluation for this coverage.

8. Issue the following Linux command:

```bash
echo $?
```

- What does this **exit status** from the previously issued command indicate?

9. Issue the following command (with an argument):

```bash
./exit.bash uli101
```

- What did you notice this time?

10. Issue the following Linux command:

```bash
echo $?
```

- What does this **exit status** from the previously issued command indicate?

11. Issue the following command (with two arguments and redirecting stderr to a file):

```bash
./exit.bash uli101 Linux 2> error.txt
```

- What did you notice this time?

12. Issue the following Linux command:

```bash
echo $?
```

13. Issue the following Linux command to confirm that stderr was redirected to a file:

```bash
cat error.txt
```

13. Issue the following to run a checking script:

```bash
~ops145/t9-check-3
```

14. If you encounter errors, make corrections and **re-run** the checking script until you receive a congratulations message, then you can proceed.

In the next investigation, we will learn to create / modify **startup files** to customize your Linux shell environment.

## Investigation 4: Using Start-Up Files

In this investigation, you will learn how to **customize** your **Bash Linux shell environment** by creating and testing a **start-up** file.

**Perform the Following Steps:**

1. Issue a Linux command to change to your **home** directory.
2. Issue a Linux command to confirm you are located in the **home** directory.
3. Use the **more** command to view the contents of the **default start-up** file called **/etc/profile**

   - This file contains the **default settings** when you open your Bourne shell (eg. if issuing the command **sh**).

4. Use the **more** command to view the contents of the start-up file called **/etc/bashrc**

   - This file contains the **default settings** when you **open your Bash shell** (eg. if issuing the command **bash**).
   - Since we are using the **Bash shell** by default, let's create a **customized Bash start-up file**.
   - This startup file is located in your **home** directory using the name "**.bash_profile**"
   - Let's move your **.bash_profile** file to prevent **accidental overwrite**.

5. Issue the following linux command:

```bash
mv ~/.bash_profile ~/.bash_profile.bk
```

- If you experience an error message "_No such file or directory_", just ignore this command since there is no **~/.bash_profile** file in your home directory.

6. Use a text editor like vi or nano to create the text file called **~/.bash_profile** (eg. `vi ~/.bash_profile`)

   - If you are using the nano text editor, refer to notes on text editing in a previous week in the course schedule.

7. Enter the following lines in your shell script (the symbol "\[" is the open square bracket symbol):

```bash
clear
echo -e -n "\e[0;34m"
echo "Last Time Logged in (for security):"
echo
lastlog -u $USER
echo
echo -e -n "\e[m"
```

- **NOTE:** You will notice there is **NO she-bang line** since this is a **start-up** file.

8. Save your editing session and exit the text editor (eg. with vi: press **ESC**, then type **:x** followed by **ENTER**).

   - You can test run the startup file without exiting and re-entering your Bash shell environment. Issue the following:

```bash
. ~/.bash_profile
```

- What do you notice?

10. **Exit** your current Bash shell session.
11. **Login** again to your matrix account.

- Did you start-up file customize your Bash shell environment with colours?
- **NOTE:** This is where you can make your Linux shell environment values **persistent** (i.e. saved regardless of exit and login to your Bash Shell such as **aliases**, **umask**, etc.).

12. Issue the following linux command to **restore** your previous settings for your bashrc startup file:

```bash
mv ~/.bash_profile.bk ~/.bash_profile
```

- If you experience an error message "_No such file or directory_", just ignore.

13. **Exit** your current Bash shell session.
14. **Login** again to your matrix account.

    - What did you notice this time?

## Investigation 5: User Management with bash scripting

### Using getopts Function & case statement

We will now use shell scripting to help automate the task for a Linux administrator to create regular user accounts.

**Perform the following steps:**

1. You will be using your **debhost** machine for this section.
2. Open a shell terminal, as your regular user.
3. Change to the **~/bin** directory.
4. Download, study, and run the following shell script. Issue the command:

```bash
wget https://raw.githubusercontent.com/osl645/debian-labs/main/user-create.bash
```

5. Try to understand what this bash script does, and then run the script using **sudo** to create just one user called **test**. After running the shell script, view the contents of the **/home** directory to confirm.

Although the **zenity** command is a "user-friendly" way to run shell scripts, Linux administrators usually create shell scripts that resemble common Linux commands. In this lab, you will learn to create a shell script using the getopts function to make your shell script behave more like actual Linux commands (including the use of options). Refer to the notes section on the right-hand-side for reference about the **case** statement and the **getopts** function.

6. Change to the **~/bin** directory.
7. Use the wget command to download the input file called user-data.txt by issuing the command:

```bash
wget https://raw.githubusercontent.com/osl645/debian-labs/main/user-data.txt
```

9. View the contents on the user-data.txt file to confirm there are 3 fields (username, fullname, and e-mail address)which are separated by the colon **:** symbol.
10. Use a text editor to create a bash script called: **createUsers.bash**` in the ~/bin directory.
11. Enter the following text content into your text-editing session:

```bash
#!/bin/bash

# createUsers.bash
# Purpose: Generates a batch of user accounts from a text file
#
# USAGE: sudo ./createUsers.bash [-i {input-path}]
#
# Author: *** INSERT YOUR NAME ***
# Date: *** CURRENT DATE ***

# Test for sudo
user=$(whoami)
if [ $user != "root" ]
then
    echo "You must run this script with root privileges. Please use sudo" >&2
    exit 1
fi

# Test for argument
if [ "$#" -eq 0 ] # if no arguments after command
then
 echo "You must enter an argument" >&2
 echo "USAGE: $0 [-i {input-path}]" >&2
 exit 2
fi
```

12. Save your editing session, but remain in the text editor.
13. The code displayed below uses the getopt function to set the input file pathname or check for invalid options or missing option text. Add the following code

```bash
outputFlag="n"
while getopts i: name
do
 case $name in
   i) inputFile=$OPTARG ;;
   :) echo "Error: You need text after options requiring text"
       exit 3 ;;
   \?) echo "Error: Incorrect option"
        exit 3 ;;
 esac
done
```

14. Save your editing session, but remain in the text editor.
15. The code displayed below uses logic to exit the script if the input file does not exist. Command substitution is used to store each line of the input file as a positional parameter. There is one subtle problem here: The full names of the users contain spaces which can create havoc when trying to set each line as a separate positional parameter. In this case the sed command is used to convert spaces to plus signs (+), which will be converted back later. Finally, a **for** loop is used to create each account (**useradd**) and display their account information. Add the following code:

```bash
# Test for inputFile
if [ ! -f $inputFile ]
then
  echo "The file pathname \"$inputFile\" is empty or does not exist" >&2
  exit 4
fi

# Temporarily convert spaces to + for storing lines as positional parameters
set $(sed 's/ /+/g' $inputFile)

for x
do
    userPassWd=$(date | md5sum | cut -d" " -f1)
    useradd -m \
        -c "$(echo $x | cut -d":" -f2 | sed 's/+/ /g')" \
        -s "/bin/bash" \
        -p $userPassWd \
        $(echo $x | cut -d":" -f1)

    cat <<+
    Server Account Information
    Here is your server account information:
    servername: myserver.senecacollege.ca
    username: $(echo $x | cut -d":" -f1)
    password: $userPassWd
    email: $(echo $x | cut -d":" -f3)

+
done

echo -e "\n\nAccounts have been created\n\n"
exit 0
```

16. Save, set permissions, and then run that shell script for the input text file **user-data.txt**. Did it work? Try running the script without an argument - What did it do?
17. You have completed lab4. Proceed to Completing The Lab, and follow the instructions for "lab sign-off".

**Answer INVESTIGATION 5 observations / questions in your lab log book.**

## Further Study

I hope this series of tutorials have been helpful in teaching you basic Linux OS skills.

In order to get efficient in working in the Linux environment requires **practice** and **applying** what you have learned to perform Linux operating system administration including: **user management**, **installing and removing applications**, **network services** and **network security**.

Although you are **NOT** required to perform **Linux administration** for this course, there are useful **course notes** and **TUTORIALS** for advanced Linux server administration that have been created for the Networking / Computer Support Specialist stream:

- [OPS245: Open System Server](https://seneca-ictoer.github.io/OPS245/)
- [OPS345: Open System Application Server](http://wiki.littlesvr.ca/wiki/OPS345)

Take care and good luck in your future endeavours **:)**

_Murray Saul_

## Linux Practice Questions

The purpose of this section is to obtain **extra practice** to help with **quizzes**, your **midterm**, and your **final exam**.

Your instructor may take-up these questions during class. It is up to the student to attend classes in order to obtain the answers to the following questions. Your instructor will NOT provide these answers in any other form (eg. e-mail, etc).

**Review Questions:**

1. Write code for a Bash shell script that clears the screen, and then prompts the user for their age. If the age entered is less than 65, then display a message that the person is NOT eligible to retire. If the age is equal to 65, then display a message that the person just turned 65 and can retire. If the age is greater than 65, then display the message that the user is over 65 and why have they not have already retired already?
2. Add code to the script created in the previous question to force the user to enter only an **integer** to provide error-checking for this shell script.
3. Write code for a Bash shell script that will prompt the user for a **valid POSTAL CODE**.

   - A valid postal code consists of the following format: **x\#x #x\#**
   - where **x** represents an upper or lowercase letter
   - and **#** represents a number from 0-9
   - Also VALID postal codes can consist of no spaces or one or more spaces in the format shown above.
   - If the user enters an **INVALID postal code**, indicate an error and allow the user to enter the VALID postal code. When the user enters a VALID postal code, then clear the screen and display the VALID postal code.

4. Write code that works similar to the previous question, but have it read an input file called **unchecked-postalcodes.txt** and only save VALID postal codes to a file called:

   - **valid-postalcodes.txt**
   - Design your Bash Shell script to only run if the user enters TWO ARGUMENTS:
   - **unchecked-postalcodes.txt** and **valid-postalcodes.txt**
   - Otherwise, display an error message and immediately exit your Bash Shell script with a false exit value.

5. What is the purpose of the **/etc/profile** startup file?
6. What is the purpose of the **/etc/bashrc** startup file?
7. What is the purpose of the **~/.bashrc** startup file?
8. What is the purpose of the **~/.bash_profile** file?
9. What is the purpose of the **~/.bash_logout** file?
10. Write code for the **~/.bash_profile** file below to clear the screen, welcome the user by their username, and display a list of all users currently logged into your Matrix server. Insert blank lines between each of those elements.
11. Write a command to run the recently created **~/.bash_profile** startup file from the previous question without exiting and re-logging into your Matrix account.

---

Authors: Murray Saul & Jason Carman

License: LGPL version 3 Link: https://www.gnu.org/licenses/lgpl.html

---
