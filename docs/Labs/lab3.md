---
id: tutorial3
title: Tutorial 3 - Numbering Conversion, File Permissions & Introduction to Shell Scripting
sidebar_position: 4
description: Tutorial 3 for Students to Learn Numbering Conversion, File Permissions and Introduction to Shell Scripting
---

# Tutorial 3: Numbering Conversion, File Permissions and Introduction to Shell Scripting

## Main Objectives of this Tutorial

- Understand how digital computers store data (i.e. data representation)
- Define **binary** and **octal** numbers
- Manually perform **numbering conversions** between the **binary** and **octal** numbering systems (without the use of a computer or calculator)
- Explain the purpose of **file permissions**
- Explain how permissions work differently for **directories** as opposed for **regular files**
- Change file **permissions** with the **chmod** command (both symbolic and absolute methods)
- Use the **umask** command to automatically assign permissions for **newly created directories** and **regular files**
- Plan and create a Shell Script
- Explain the purpose of the **she-bang line** contained at the top of a shell script.
- Set **permissions** and **execute** shell scripts.
- Use **environment** variables

## Tutorial Reference Material

**Course Slides:**

- Week 4 Lecture 1 Notes: [Web](https://docs.google.com/presentation/d/e/2PACX-1vQGRpKFK1QFt2qDlCJaC0bdWyro1Qh29xq6aROuJMyzwDiZE3-9_nwrSedanvGIZ7w-VwGi2AbcmDYa/pub?start=false&loop=false&delayms=3000)
- Week 4 Lecture 2 Notes: [Web](https://docs.google.com/presentation/d/e/2PACX-1vQFTkiLPDWMIWWBiV0KH83V2MRjLOvkXjsWtlgD9vZxOrHTFFz2cVpoKRdCYtcBMkYyWAZUVXQaC2zU/pub?start=false&loop=false&delayms=3000)

**Numbering Conversion and Data Representation Definitions:**

| [Data Representation](https://home.adelphi.edu/~siegfried/cs170/170l1.pdf) | [Binary Numbers](https://en.wikipedia.org/wiki/Binary_number) | [Octal Numbers](https://en.wikipedia.org/wiki/Octal) |
| :------------------------------------------------------------------------- | :------------------------------------------------------------ | :--------------------------------------------------- |

**File Permission Concepts:**

- [Introduction to File Permissions](https://www.booleanworld.com/introduction-linux-file-permissions/)

**File Permission Commands:**

- [chmod](https://ss64.com/bash/chmod.html)
- [umask](https://ss64.com/bash/umask.html)

**Shell Scripting:**

- [Purpose](https://searchdatacenter.techtarget.com/definition/shell-script)

**Variables:**

- [Environment](https://opensource.com/article/19/8/what-are-environment-variables)
- [User Defined](https://www.linuxtechi.com/variables-in-shell-scripting/#:~:text=User%20Defined%20Variables%3A,like%20a%20real%20computer%20program.)
- [Positional Parameters](http://osr600doc.xinuos.com/en/SDK_tools/_Positional_Parameters.html#:~:text=A%20positional%20parameter%20is%20a,up%20to%20nine%20positional%20parameters.)

**Commands / Techniques:**

- [read](http://linuxcommand.org/lc3_man_pages/readh.html)
- [readonly](https://man7.org/linux/man-pages/man1/readonly.1p.html)
- [Command Substitution](https://www.gnu.org/software/bash/manual/html_node/Command-Substitution.html)

## Key Concepts

### Data Representation

Digital computers are **electronic devices** that contain a series of **circuits** and voltage levels that can store / represent data.

**Binary numbers** can represent those series of circuits with voltage levels. Those binary numbers are combined in a sequence to form a **byte**. Bytes are used to represent numbers or characters.

![Binary Number 1](/img/Binary-number1.png)

IT professionals may need to perform **numbering conversion** to use with programming functions or OS commands to perform common operations on a computer system.

IT Professionals that use data representation:

- _Network Specialists:_ Building Large Networks via Sub-netting
- _Programmers:_ Sending information over networks, files
- _Web Developers:_ Setting color codes for webpage background or text
- _Unix/Linux System Administrators:_ Setting _permissions_ for files and directories

### Numbering Conversion Methods

#### Octal to Binary and Binary to Octal

**Binary to Octal**

1. **One octal number** represents **3 binary numbers**, so **starting from right-side**, group binary digits into **groups of 3** (add leading zeros if necessary).
2. Write **(4)(2)(1)** under each **group of 3 binary numbers**.
3. Multiply the value or "placeholder" (i.e. **0**'s and **1**'s) by the corresponding **(4)(2)(1)** for each group to obtain the octal number (refer to diagram of _binary_ to _octal_ conversion below).

![Binary to Octal](/img/Bin-to-octal.png)

**Octal to Binary**

1. **One octal number** represents **3 binary numbers**, so space-out the octal numbers to make space for a binary number.
2. Write **(4)(2)(1)** under each octal number.
3. Write **0**'s or **1**'s for each group of binary numbers to add up to the corresponding octal number (refer to diagram of _octal_ to _binary_ conversion below).

![Octal to Binary](/img/Octal-to-bin.png)

### File Permissions

Since Unix / Linux operating file systems allow for **multiple user accounts** it is essential to have a system to **share** or **limit** access to directories and files contained within the file system.

![Listing file directory](/img/Listing-file-directory.png)

Detailed directory listing showing permissions for a **directory** and a **regular file**.

When **directories** and **regular files** are created, they are assigned to an **owner** (typically the username which is the creator). To _allow_ or _limit_ **access** to those files and directories, those files and directories are assigned to an initial **group** referred to as a "**primary group**".

Users that own those directories and regular files are referred to as **users**, users that belong within the same group are referred to as same group members, and those users that do NOT belong to a particular group are referred to as **other group members**.

**NOTE:** In this course, we CANNOT create groups or assign users to groups in the **Matrix** server. Instead, you may learn how to those tasks when or if you take a Unix/Linux administration course. On the other hand, you can change which **user, same group members** or **other group members** can access or NOT access a directory or regular file.

File Permissions consist of **two-layers**:

**First**, the permissions of a **directory** that contains regular files, and **second**, permissions of the _subdirectories and/or regular files_ within that directory. Refer to the diagram below to see the explanation of permissions of a directory.

![Directory Permissions](/img/Directory-permissions.png)

Permissions for directories have a different meaning than permissions for **regular files**. Refer to the diagram below to see the explanation of permissions of a regular file.

![File Permissions](/img/File-permissions.png)

A symbol dash "-" indicates that the permission has **NOT** been granted.

The permissions of **newly-created** directories and regular files are automatically assigned via a **user mask** (we will discuss this shortly). In order to change permissions for directories and regular files, you would use the **chmod** command.

### Changing File Permissions - chmod

#### Symbolic Method

The chmod can use **symbols** to _add, remove,_ and _set_ **rwx** permissions for the **user**, **same group members**, and/or **other group members** for a directory or reqular file.

| **Command**               | **Description**                                                                                                                                                                         |
| :------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `chmod ugo+x script.bash` | Add execute permissions to the file **script.bash** so it can be run                                                                                                                    |
| `chmod u=rwx,go=x ~`      | Set "**pass-thru**" permissions of your **home** directory for same group members and other group members to navigate to other subdirectories (that may have access / view permissions) |
| `chmod go-w ~/shared`     | Remove write permissions for same group members and other group members and other group members for the directory **~/shared**                                                          |
| `chmod a=rx myfile.txt`   | Set read and execute permissions for the file **myfile.txt**                                                                                                                            |

#### Octal (Absolute) Method

You can also use **octal numbers** to **set** permissions. This method is a short-cut and may require less typing than using the _symbolic_ method. You can only use this method to set file permissions (as opposed to _add_ or _remove_ permissions.

Since 1 octal digit represents 3 binary digits, one octal digit can represent the **rwx** permission granted or NOT granted. The permissions **rwx** are be in the form of 3 binary digits (1 represents the permission granted and 0 represents the permission NOT granted).

![Octal Permissions](/img/Octal-permissions.png)

**NOTE:** You can use the **-R** option to set permissions for directory, subdirectory and directory contents **recursively**.

### Setting Permissions for Newly-Created Directories and Regular Files - umask

The **umask** command is used to set the permissions of newly-created directories and regular files.

Issuing the **umask** command without arguments will display the current umask value. Refer to the diagrams below to set the umask value for directories and regular files. Setting the umask value (for example umask 022) only takes effect for the current shell session unless the umask command is contained in a start-up file (e.g. **.profile**, **.bash_profile**, or **.bashrc**).

![Umask Directory](/img/Umask-directory.png)

Setting **umask** for newly-created **directories** ^.

![Umask File](/img/Umask-file.png)

Setting **umask** for newly-created **regular files** ^

A shell script is a **file** that contains **Unix/Linux commands** and **reserved words** to help **automatic** common tasks.

### Creating & Executing Shell Scripts

It is recommended to **plan** out on a piece of paper the purpose of the shell script. Once you have planned your shell script by listing the **sequence of steps (commands)**, you need to create a file (using a **text editor**) that will contain your Linux commands.

**NOTE:** Avoid using filenames of already existing Linux Commands to avoid confusion. It is recommended to include a file extension that describes the type of shell for the shell script.

**Using a Shebang Line**

Since Linux shells have evolved over a period of time, using a she-bang line **forces** the shell script to run in a **specific shell**, which could prevent errors in case an older shell does not recognize newer features from more recent shells.

The **she-bang** line is a **special comment** at top of your shell script to run your shell script in a specific shell.

```bash
#!/bin/bash




```

**NOTE:** The **shebang line** must appear on the **first line** and at the **beginning** of the shell script, otherwise, it will be treated as a regular comment and ignored.

**Setting Permissions / Running Shell Scripts**

To run your shell script by name, you need to assign **execute permissions** for the user. To run the shell script, you can **execute** the shell script using a relative, absolute, or relative-to-home pathname

_Examples:_

```bash
chmod u+x myscript.bash
```

```bash
./myscript.bash
```

```bash
/home/username/myscript.bash
```

```bash
~/myscript.bash
```

### Variables

#### Environment Variables

Shell **environment variables** shape the working environment whenever you are logged in Common shell. Some of these variables are displayed via Linux commands in the diagram displayed below.

You can issue the pipeline command **set | more** to view all variables.

Placing a dollar sign "$" prior to the variable name will cause the variable to expand to the value contained in the variable.

```bash
echo $PWD
/home/murray.saul
```

```bash
echo $PATH
/urs/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin:/home/murray.saul/bin
```

```bash
echo $USER
murray.saul
```

```bash
set | head -5
ABRT_DEBUG_LOG=/dev/null
BASH=/bin/bash
BASHOPTS=checkwinsize:cmdhist:expand_aliases:extglob:extquote:
BASH_ALIASES=()
BASH_ARGC=()
```

```bash
echo $name

```

```bash
name="Murray Saul"
```

```bash
echo $name
Murray Saul
```

```bash
name=echo $name

```

```bash
read -p "Enter full name: " name
Enter full name: Murray Saul
```

```bash
echo $name
Murray Saul
```

Examples of using **Environment** and **User Defined** variables.

#### User Defined Variables

**User-defined** variables are variables that can be used in the shell script for **customized** purposes.

Data can be stored and removed within a variable using an **equal sign** (no spaces on either side of equal sign).

The **read** command can be used to prompt the user to enter data into a variable. The **readonly** command will prevent the current value of the variable for the remainder of the execution of a shell script.

## Investigation 1: Numbering Conversions

**ATTENTION: This online tutorial will be required to be completed by Friday in week 5 by midnight to obtain a grade of 2% towards this course**

For this investigation, we will NOT be logged into our Matrix account, but it is recommended to have an **MS Word document** open to manually perform numbering conversions.

**NOTE: It is essential that you learn how to manually perform numbering conversions since you will NOT be permitted to perform quizzes, midterm, or your final exam with a computer or a calculator. Learning to quickly perform manual numbering conversions will make IT professional more productive such as setting permissions, designing computer networks, or selecting complex colors when developing webpages.**

You will now get practice performing numbering conversions.

**Perform the Following Steps:**

1. Perform a manual conversion of the **octal number 461** to a **binary number**.

   - What method (displayed above) will you use? Use a calculator to check your work.

2. Perform a manual conversion of the **binary number** **11110001** to a **octal number**.

   - What method (displayed above) will you use? Use a calculator to check your work.

3. Perform a manual conversion of the **octal number 755** to a **binary number**.

   - What method (displayed above) will you use? Use a calculator to check your work.

4. Perform a manual conversion of the **binary number** **10101111** to an **octal number**.

   - What method (displayed above) will you use? Use a calculator to check your work.

5. Perform a manual conversion of the same **binary number** **10101101** to an **octal number**.

   - What method (displayed above) will you use? Use a calculator to check your work.

6. Perform a manual conversion of the **octal number 5636** to a **binary number**.

   - What method (displayed above) will you use? Use a calculator to check your work.

7. Perform a manual conversion of the **binary number 101110001** to an **octal number**.

   - What method (displayed above) will you use? Use a calculator to check your work.

8. When you have performed all of the numbering conversions above, then you can proceed to the next INVESTIGATION.

## Investigation 2: File Permissions

In this investigation, you will get experience using the **chmod** command to **change permissions** for existing files and the using **umask** command to automatically set permissions for newly-created files.

### Part 1: Changing Directory Permissions

**Perform the Following Steps:**

1. **Login** to your matrix account and issue a command to **confirm** you are located in your **home** directory.
2. Issue a single Linux command to create the following directory structure displayed in the diagram below.

![File Permission Practice 1](/img/File-permission-practice-1.png)

- **NOTE:** You will now run a shell script to confirm that you properly created that directory structure in your _Matrix_ account.

3. Issue the following Linux command to run a checking script:

```bash
~ops145/t3-check-1
```

4. If you encounter errors, make corrections and **re-run** the checking script until you receive a congratulations message, then you can proceed.
5. Issue Linux commands to create **empty files** for each of those newly created **directories** as shown in diagram below:

![File Permission Practice 2](/img/File-permission-practice-2.png)

- **NOTE:** You will now run another shell script to confirm that you properly created those empty files within those specified directories.

6. Issue the following Linux command to run a checking script:

```bash
~ops145/t3-check-2
```

7. If you encounter errors, make corrections and **re-run** the checking script until you receive a congratulations message, then continue the remaining steps.

   - Let's get practice **viewing permissions**, **changing permissions**, and automatically **setting permissions for newly created files.**

8. Issue the following Linux commands:

```bash
ls -ld ~/documents ~/clients ~/vendors
```

```bash
ls -lR ~/documents ~/clients ~/vendors
```

- **NOTE:** You should see permissions already set for those newly created directories and regular files. What do these permissions mean for **same group member** and **other group member** access to those directory and regular files?

9. Let's limit access to the **clients** and **vendors** directories to only yourself and same group members. Issue the following Linux command:

```bash
chmod 750 ~/clients ~/vendors
```

10. Issue the **ls -ld** and **ls -lR** commands (as you did in step _\#8_) to confirm that the permissions for those directories have been changed.

    - **NOTE:** The **-R** option for the **chmod** command can change the file permissions recursively within a directory structure.

11. Issue the following Linux command:

```bash
chmod 750 -R ~/documents
```

12. Issue the **ls -ld** command to confirm the permissions for the **~/documents**, **~/document/memos** , **~/documents/reports**, and **~/documents/contracts** directories.
13. Issue the following Linux command:

```bash
ls -lR ~/documents
```

- What do you noticed happened to the permissions for the regular files contained in those directories. Did those regular file permissions change?

### Part 2: Changing File Permissions

We will now change permissions for regular text file contained in subdirectories of the **documents** directory to: **r w - r - - - - -**

1. Issue the following Linux commands:

```bash
chmod 640 ~/documents/memos/memo*.txt
```

```bash
chmod 640 ~/documents/reports/report*.txt
```

```bash
chmod 640 ~/documents/contracts/contract*.txt
```

2. Issue the **ls -lR** command for the **~/documents** directory to confirm that those regular file permission have changed.

   - Let's run a checking script to make certain you correctly set permissions for those directories and files.

3. Issue the following:

```bash
~ops145/t3-check-3
```

4. If you encounter errors, make corrections and then re-run the checking script until you receive a congratulations message and then continue with this tutorial.

   - Let's get some practice setting permissions to allow users to make editing changes to regular files.

5. Issue the following Linux command:

```bash
chmod ugo-w ~/documents/memos/memo*.txt
```

6. Use the **ls** command to verify that those regular file's permissions have changed.
7. Using the nano or vi text editor, open the regular file **~/documents/memos/memo1.txt** and type in some text and try to save your editing changes.

   - What happened?

8. To **abort** your editing session in **vi**: type `:q!` and press **ENTER**.

   - To **abort** your editing changes in **nano**: type `ctrl-x`
   - type `n` and then press **ENTER** when prompted to save editing changes.

9. Issue the following Linux command to add write permissions for all files in the **memos** directory for yourself (i.e. user):

```bash
chmod u+w ~/documents/memos/*
```

10. Repeat steps to edit the file **~/documents/memos/memo1.txt** (as you did in _step \#20_).

    - Were you able to edit the file and save your editing changes?

11. Issue a Linux command to view the contents of the **~/documents/memos/memo1.txt** text file that you were able to edit.

### Part 3: Working with umask

1. Issue the following Linux command to view permissions for your **home** directory:

```bash
ls -ld ~
```

- What does execute permissions mean for same group members and other group members in terms of your **home** directory?

2. Issue the following Linux command to create a new subdirectory:

```bash
mkdir ~/shared
```

3. Issue the following Linux command:

```bash
ls -ld ~/shared
```

- What are the permissions for this newly-created directory?
- Can other users access the directory pathname **~youruserid/shared** ?

4. Issue the following Linux command (without an argument):

```bash
umask
```

- **NOTE:** You should see a **four-digit octal** number. Drop the leading zero on the left to obtain the **default umask value**.

5. Perform a **mathematical calculation** by taking the **octal number 777** and **subtracting** the default umask value you determined in the previous step. What is the result?
6. Convert that octal number result to a **binary number**. What does that represent as newly created directory permissions? Does that correspond to the permissions for the newly created **~/shared** directory?
7. Repeat the calculation (like in step \#4) but with a umask setting of **077** to see how this new umask setting would
   affect permissions of newly-created directories.

8. Issue the following Linux command:

```bash
umask 077
```

9. Issue the following Linux command (without arguments):

```bash
umask
```

- **NOTE:** You should notice the value **0077**. By dropping the leading zero to the left, that would provide the default **umask value of 077**.

10. Issue the following Linux command:

```bash
mkdir ~/shared2
```

11. Issue the following Linux command:

```bash
ls -ld ~/shared2
```

- Do the permissions for this newly created directory match the predicted permissions that you calculated in **step \#30**?

12. Issue the following Linux command to create an empty regular file called **myfile.txt** in the **~/shared2** directory:

```bash
touch ~/shared2/myfile.txt
```

13. Use the **ls -l** command to view the permissions for this newly created regular file.

    - What do you notice about those permissions?
    - Let's run a checking script to make certain you correctly set permissions for those recently-created directories and files.

14. Issue the following:

```bash
~ops145/t3-check-4
```

- If you encounter errors, make corrections and then re-run the checking script until you receive a congratulations message and then continue with this tutorial.

15. Logout of your Matrix account, and then log-back into your Matrix account.
16. Issue the following Linux command (without arguments):

```bash
umask
```

- What happened? Referring to your notes, what do you need to do to make that umask value persistent?

**WARNING:** You should be extremely aware of your permissions since you may perform **marked work** for other courses on your **Matrix** server.

You should NOT set permissions to share your work with **same group** or **other** group members (unless **given specific permissions instructions from your course professors**). If students can have access to your directories and project files, they could **copy** your work and thus make yourself and other student(s) that copied your work to be charged with an **Academic Integrity Violation**.

## Investigation 3: Creating A Shell Script

In this investigation, you will learn how to create and run a **Bash Shell script**.

**Perform the Following Steps:**

1. **Login** to your matrix account.
2. Issue a command to **confirm** you are located in your **home** directory.

   - We want to create a Bash Shell script to welcome the user by their _username_.
   - Let's first look at selecting an appropriate filename for your shell script.

3. Issue the following linux command to check if the filename called **hello** already exists as a command:

```bash
which hello
```

- The output from this command should indicate that the shell did NOT find any directories that contained this filename that could represent a command; therefore, this shell script name CAN be used.

4. Use a **text editor** like **vi** or **nano** to create the text file called **hello**
5. Enter the following three lines in your shell script:

```bash
echo
```

```bash
echo "Hello $USER"
```

```bash
echo
```

![Hello 0](/img/Hello0.png)

- **NOTE:** The variable called **USER** is an **environment variable** that contains the current user's login name. If you wanted to share your shell script with other users, when they run the shell script, they will greeted by their username. _Environment variables_ make your shell script adaptable by ALL users.

6. **Save** your editing session and **exit** the text editor.

   - Instead of issuing the **bash** command followed by your shell script pathname as an _argument_, let's simply run it by its filename. This is the most common method of running shell scripts.

7. Issue the following linux command to run your shell script in your current directory:

```bash
./hello
```

```bash
> ./hello
-bash: ./hello: Permission denied
>
```

- You should notice an **ERROR message** indicating you don't have permissions to run the file. To fix this, you need to **add execute permissions** prior to running the shell script.

```bash
> ./hello
Hello YourUserID
>
```

8. Issue the following linux command to **add** execute permissions for your shell script:

```bash
chmod u+x hello
```

9. Issue the following to run your shell script:

```bash
./hello
```

- Did your shell script run?

10. Issue the following Linux command to run a checking script:

```bash
~ops145/t3-check-5
```

11. If you encounter errors, make corrections and **re-run** the checking script until you receive a congratulations message, then you can proceed.

    - In the next investigation, you will learn to create and run shell scripts that use **variables**, **positional** and **special parameters**. You will also learn how to add a **she-bang line** at the top of a shell script to force it to run in a specified shell.

Proceed to the next investigation.

## Investigation 4: She-Bang Line, Variables, and Parameters

In this investigation, you will add a **she-bang line** at the top of your shell script to force the shell script to run in a specified shell when executed. You will also learn how to use **variables**, **positional** and **special parameters** to make your shell scripts more adaptable.

**Perform the Following Steps:**

1. Confirm that you are located in your **home** directory in your Matrix account.

   - Let's run shell scripts with and without a **she-bang** line at the top of your shell script to demonstrate why using a she-bang line should be included in a shell script to force the shell script to be run in a specific shell.

2. Use a text editor to **edit** the **hello** shell script that you created in the previous investigation.
3. Add the following line to the bottom of the file (**copy** and **paste** to prevent _errors_):

```bash
echo "The current shell you are using is: $(ps -o cmd= -p $$|cut -d' ' -f1)"
```

- **FYI:** This command displays the **name** of the _shell_ that the shell script is running in. The command within **$( )** uses a technique known as **command substitution**.

4. Issue the following Linux command to change to an older shell called the **Bourne Shell**:

```bash
sh
```

- You should notice your **shell prompt changed** which indicates that you are in a different shell.

5. Issue the following Linux command to run your shell script in the _Bourne Shell_:

```bash
./hello
```

- You should see that you are currently running the shell script "**sh**" which represents the **Bourne shell**.

```bash
> sh
sh-4.2$ ./hello

Hello murray.saul

The current shell you are using is: sh
```

- **NOTE:** Due to the fact that shells (and their features) have **evolved** over a period of time, an error may occur if you include a **NEWER shell feature** (e.g. _Bash Shell_) but run it in an **OLDER shell** (For example: the _Bourne Shell_).
- You can add a **special comment** called a **she-bang line** at the BEGINNING of the FIRST line of your shell script to **force** it to run in the shell you want (for example: the Bash shell).

![Shebang 1](/img/She-bang-1.png)

6. Edit your **hello** shell script using a text editor.
7. **Insert** the following line at the **beginning** of the **first** line of your hello file:

```bash
#!/bin/bash
```

- This is referred to as a **she-bang line**. It forces this script to be run in the **Bash Shell**.
- When your Bash Shell script finishes execution, you are returned to your current shell that you are using (which in our case in Matrix, is still the Bash shell).

8. **Save** your editing changes and **exit** your text editor.
9. While in the Bourne shell, issue the following Linux command:

```bash
./hello
```

- You should notice that the shell name is running in the **Bash shell** (i.e. _/bin/bash_).

```bash
> sh
sh-4.2$ ./hello

Hello murray.saul

The current shell you are using is: /bin/bash
```

- It is a good idea to rename your shell script to include an **extension** to indicate that it is a **Bash Shell** script.

10. Issue the following Linux command to rename your shell script file:

```bash
mv hello hello.bash
```

11. Confirm that the renamed Bash shell script works by issuing:

```bash
./hello.bash
```

12. Enter the following Linux command to **exit** the Bourne shell and return to your _Bash shell_:

```bash
exit
```

- **Environment variables** are used to set the environment of the shell or shell scripts Let's include some **ENVIRONMENT variables** in our Bash Shell script.

13. Use a text editor to edit the shell script called **hello.bash**
14. Add the following lines to the bottom of the _hello.bash_ file:

```bash
echo
echo "The current directory location is: $PWD"
echo "The current user home directory is: $HOME"
echo
```

15. Save your editing changes and exit your text editor.
16. Run your modified Bash shell script by issuing:

```bash
./hello.bash
```

- Take time to view the output and the values of the environment variables.

```bash
> ./hello.bash

Hello murray.saul

The current shell you are using is: /bin/bash

The current directory location is: /home/murray.saul
The current user home directory is: /home/murray.saul
```

- You can modify the PATH variable to include the current directory (i.e. ".") so you can run the command by just script filename (eg. **hello.bash** as opposed to **./hello.bash**)

17. Issue the following Linux command to add your current directory to the **PATH** environment variable:

```bash
PATH=$PATH:.
```

18. Issue the following Linux command to confirm that the current directory "." has been **added** to the end of the **PATH** environment variable:

```bash
echo $PATH
```

19. Issue the following to run your Bash shell script just by name:

```bash
hello.bash
```

- Did your Bash shell script run?

```bash
> PATH=$PATH:.
> hello.bash

Hello murray.saul

The current shell you are using is: /bin/bash

The current directory location is: /home/murray.saul
The current user home directory is: /home/murray.saul
```

20. Exit your Matrix session, and log back into your Matrix session.
21. Re-run the **hello.bash** shell script by just using the name.

- What did you notice?
- The setting of the **PATH** environment variable only worked in the current session only.
- If you exit the current Matrix session, then the recently changed settings for environment variables will be lost.
- You will in a future tutorial how to set environment variables in **start-up** files.

22. Issue the following Linux command to run a checking script:

```bash
~ops145/t3-check-6 | more
```

- If you encounter errors, make corrections and **re-run** the checking script until you receive a congratulations message, then you can proceed.

Complete the _Linux Practice Questions_ sections to get additional practice.

## Linux Practice Questions

The purpose of this section is to obtain extra practice to help with your quizzes, your midterm, and your final exam.

Your instructor may take-up these questions during class. It is up to the student to attend classes in order to obtain the answers to the following questions. Your instructor will NOT provide these answers in any other form (eg. e-mail, etc).

**Review Questions:**

1. How many **binary** digits does 1 octal digit represent?
2. Use **manual numbering conversion** to complete the table displayed below.

| Octal | Binary    |
| :---- | :-------- |
| 640   |           |
|       | 110100100 |
| 145   |           |
|       | 111010100 |
| 755   |           |
|       | 110100100 |

3. Write the **chmod** command (using the symbolic method) to set “**pass-through**” permissions (eg. **r w x - - x - - x**) for your **home** directory using an **absolute pathname**.

   - Write a Linux command to verify that permissions where set.

4. Perform a binary to octal numbering conversion for the permissions: **r w x - - x - - x**

   - Write single Linux command to set “**pass-through**” permissions for your **home** directory, using the **absolute method** (i.e. octal numbers).

5. Write a single Linux command to **add read permissions** for **same group members** for the **~/tests** directory.

6. Write a single Linux command to **remove write permissions** for **same group members** and **other group members** for the **~/projects** directory. Use the _symbolic_ method.

7. Write a single Linux command to set the permissions for the **~/assignments** directory to the following using the **absolute** method (i.e. octal numbers): **r w x r - x - - x** Show your work to perform a **binary** to **octal** conversion.

   - Write the command below using octal numbers and using a relative-to-home pathname.

8. Assume that you just issued the command:

```bash
chmod u=rwx,go=x ~/linux/content
```

- What would be the new permissions for the “**content**” directory?

9. Assume that you just issued the commands:

```bash
umask 077
```

```bash
mkdir mydir
```

```bash
touch mydir/myfile.txt
```

- What would be the permissions for the newly created **directory** and **regular file**? (show your work)

**Scripting: Write Bash Shell Script Code**

1. Write a Bash shell script that clears the screen and displays the text Hello World on the screen.

   - What **permissions** are required to run this Bash shell script?
   - What are the different methods that you can run this Bash shell script from the command line?

2. Write a Bash shell script that clears the screen, prompts the user for their **full name** and then prompts the user for their **age**, then clears the screen again and welcomes the user by their name and tells them their age.

   - What **comments** would you add to the above script’s contents to properly document this Bash shell script to be understood for those users that would read / edit this Bash shell script’s contents?

---

Author: Murray Saul

License: LGPL version 3 Link: https://www.gnu.org/licenses/lgpl.html

---