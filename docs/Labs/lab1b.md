---
id: lab1
title: Lab 1B - Unix and Linux File Management
sidebar_position: 2
description: Lab 1B for Students to learn Unix/Linux File Management
---

# Tutorial 1B: Unix and Linux File Management

## Main Objectives of this Lab

- Understand the purpose of **directories** and **directory pathnames.**
- Use common **Unix / Linux commands** to perform **directory management** tasks.
- Use **Text Editors** to create and modify text files
- Use Common Unix / Linux commands to **manage** and **manipulate** text files.

## Tutorial Reference Material

**Lecture Slides:**

- Week 2 Lecture 1 Notes: [Web](https://docs.google.com/presentation/d/e/2PACX-1vRJpUz-3ikfrB9sUMdR_Zr2oLjjwcMaabrIzXqej7o8XMrB5AyZErNeCZBEbooqcuArRy8_dNJB5sSS/pub?start=false&loop=false&delayms=3000)
- Week 2 Lecture 2 Notes: [Web](https://docs.google.com/presentation/d/e/2PACX-1vRX_weqJU6HBT8--NUAmlLNdschF91RV-HYxPiDpQKIyQzSvJj-L6VBZXyrmkZKUAdcbzPULNIjRqPw/pub?start=false&loop=false&delayms=3000)

**File Management Reference:**

| [pwd](http://man7.org/linux/man-pages/man1/pwd.1.html) | [cd](http://man7.org/linux/man-pages/man1/cd.1p.html) | [ls](http://man7.org/linux/man-pages/man1/ls.1p.html) | [tree](https://www.systutorials.com/docs/linux/man/1-tree/) | [mkdir](http://man7.org/linux/man-pages/man1/mkdir.1.html) | [rmdir](http://man7.org/linux/man-pages/man1/rmdir.1.html) | [cp](http://man7.org/linux/man-pages/man1/cp.1.html) | [mv](http://man7.org/linux/man-pages/man1/mv.1p.html) | [rm , rm -r](http://man7.org/linux/man-pages/man1/rm.1.html) |
| :----------------------------------------------------- | :---------------------------------------------------- | :---------------------------------------------------- | :---------------------------------------------------------- | :--------------------------------------------------------- | :--------------------------------------------------------- | :--------------------------------------------------- | :---------------------------------------------------- | :----------------------------------------------------------- |

**Text Editors and File Content Reference:**

| [vi](http://man7.org/linux/man-pages/man1/vi.1p.html) , [nano](https://linux.die.net/man/1/nano) | [cat](http://man7.org/linux/man-pages/man1/cat.1.html) | [more](http://man7.org/linux/man-pages/man1/more.1.html) , [less](http://man7.org/linux/man-pages/man1/less.1.html) | [head](http://man7.org/linux/man-pages/man1/head.1.html) , [tail](http://man7.org/linux/man-pages/man1/tail.1.html) | [touch](http://man7.org/linux/man-pages/man1/touch.1.html) | [file](http://man7.org/linux/man-pages/man1/file.1.html) | [find](http://man7.org/linux/man-pages/man1/find.1.html) | [diff](http://man7.org/linux/man-pages/man1/diff.1.html) | [sort](http://man7.org/linux/man-pages/man1/sort.1.html) | [uniq](http://man7.org/linux/man-pages/man1/uniq.1.html) | [grep](http://linuxcommand.org/lc3_man_pages/grep1.html) |
| :----------------------------------------------------------------------------------------------- | :----------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------ | :--------------------------------------------------------- | :------------------------------------------------------- | :------------------------------------------------------- | :------------------------------------------------------- | :------------------------------------------------------- | :------------------------------------------------------- | :------------------------------------------------------- |

**Text Editor Cheat Sheets:**

- [Nano Reference Sheet (PDF)](http://www.cheat-sheets.org/saved-copy/Nano_Cheat_Sheet.pdf)
- [Vi Reference Sheet (PDF)](https://www.smashingmagazine.com/2010/05/vi-editor-linux-terminal-cheat-sheet-pdf)

**Links:**
| [ln](http://man7.org/linux/man-pages/man1/ln.1.html) |
| :--- |

- [Hard Links](http://www.linfo.org/hard_link.html#:~:text=A%20hard%20link%20is%20merely,created%20to%20other%20hard%20links.)
- [Symbolic Links](https://www.computerhope.com/jargon/s/symblink.htm#:~:text=Alternatively%20referred%20to%20as%20a,or%20directory%20using%20its%20path.&text=In%20Linux%20and%20Unix%20symbolic,created%20using%20the%20mklink%20command.)

## Key Concepts

### Unix and Linux Directories

To better **organize** files (eg. text, images, documents, spreadsheets, programs) within your Matrix account, they should be stored in **directories.** To further organize many files, directories
may contain **sub-directories.**

The Unix / Linux file system is **hierarchical**, like other operating systems such as **Windows, macOS,** etc. In Unix / Linux (as opposed to Windows), there are no drive letters (such as **C:**, or **D:**).

All files and directories appear under a single ancestor directory called the "**root directory**".

![Directory Structure 1](/img/Directory-structure-1.png)

Learning how to issue Linux commands for **navigating** and **manipulating** directory and files within the the Linux filesystem are **essential skills** for Linux users and Linux system administrators (i.e. sysadmins).

In the Linux (Unix) OS, the "**root directory**" / is the starting directory, and other "child directories", "**grandchild directories**", etc. can be created as required. The hierarchical structure resembles an "upside-down tree".

There is actually a command called tree that displays a "**directory tree diagram**"!

### Directory Pathnames

_A **pathname** is used to specify a **route to a file** within the file system._

_A pathname **points** to a file system location by **following the directory tree hierarchy** expressed in a string of characters in which path components, separated by a delimiting character, represent each directory. The **delimiting character** is most commonly the slash ("/"). Reference:_ https://en.wikipedia.org/wiki/Path_(computing)

![Path Name](/img/Path-name.png)

The following table displays and defines **commonly used directories** (listed by directory pathname) for for ALL Unix / Linux Filesystems:

| **Directory Pathname** |	**Purpose** |
| :--- | :---: |
| **/** |	Root directory (ancestor to all directories) |
| **/home** |	Used to store users’ home directories |
| **/home/username** |	A ***specific*** User's Home Directory |
| **/bin** |	Common system binaries (commands) |
| **/usr/bin** |	Common utilities (commands) for users. |
| **/usr/sbin** |	Common utilities for system administration |
| **/etc** |	System administration files (eg. passwd) |
| **/var** |	Dynamic files (log and mail files) |
| **/tmp** , **/var/tmp** |	Temporary files for programs |
| **/dev** |	Device driver files (terminals, printers, etc.) |

![Directory Structure 2](/img/Directory-structure-2.png)

When you log into your Matrix account, you are automatically directed to your **home** directory. This directory is where the user can store files, and create subdirectories to organize their files.

## Investigation 1: Creating and Managing Directories

**ATTENTION: This  lab must be completed by Friday at 11:59pm in Week 3 to obtain a grade of 2% towards this course.**

In this investigation, you will learn how to **create**, **navigate**, **list directory contents** and **remove directories** in your Matrix account.

**Directory File Naming Rules**

Before you learn how to create directories, it is important to understand what represents an appropriate **directory filename.**

Listed below are some common **file-naming rules:**

  - Unix/Linux characters are **case sensitive**. It is recommended to be consistent (e.g. use all lowercase letters)
  - Adopt a **consistent directory naming scheme** (this will help you to navigate within your directory structure)
  - Make your directory names **meaningful**
  - **Avoid non-alphanumeric characters**, as they may have a special meaning to the system that will make your work more difficult when changing to directories, etc.
  - **Avoid using spaces** for directory names (consider periods, hyphens, and underscores instead)

### Part 1: Creating Directories

Creating subdirectories within your home directory makes it more **efficient** to save and access files on your Linux server.

A comparison would be rooms in a **house**. If there were no rooms, just one large room in a 3,000 square foot house, it would be "messy" and difficult to locate items. Each **room** in a house is used to for a **specific purpose** to be more productive to perform a task such as a kitchen, bedroom, bathroom, etc.

You will be creating the following **directory structure** within your home directory (refer to diagram below).

![Directory Structure 3](/img/1_-_700px-Directory-structure-3.png)

**Tree Diagram** of Directory Structure to Create in your **Home** Directory (displayed in blue text).

**Perform the Following Steps:**

**NOTE:** For several of the following commands, you will be using **your Seneca username** to replace the text:"**your-seneca-id**" in a pathname.

For example, if your Seneca user ID was **mkhan** then you would display the pathname _/home/your-seneca-id_ as: **/home/mkhan**

  1. Confirm that you are logged into your Ubuntu virtual machine and have the **Terminal** open.
  2. Issue the following Linux command: 

```bash
mkdir /home/your-seneca-id/osl640xx
``` 

   - (remember: use your Seneca username instead of "your-seneca-id")
   - **NOTE:** You should always confirm that you have created a directory. This can be done by issuing the `ls` command.

  4. Issue the following Linux command: 

```bash
ls /home/your-seneca-id/osl640xx
```

   - There are no contents that are contained in this newly-created directory; therefore, no contents appear. A useful option **-d** can be used to confirm that the actual directory has been created as opposed to viewing the contents of the directory.

  5. Issue the following Linux command: 

```bash
ls -d /home/your-seneca-id/osl640xx
```

   - You should now see just the directory listed. You can also combine the **-d** and **-l** options to provide more detail regarding the newly-created directory.

  6. Issue the following Linux command: 

```bash
ls -d -l /home/your-seneca-id/osl640xx
```

   - How can you confirm from the output of this command that the file osl640xx is a directory?

  7. Issue the following Linux command: 

```bash
ls -ld /home/your-seneca-id/osl640xx
```

   - Is the output from this command the same was the output from the previous command?
   - If so, what does this say about how to use multiple options for Linux commands?

![Create Confirm](/img/2-create-confirm.png)

   - **Creating** and **Confirming** the Creation of a Directory.

  8. Issue the following Linux command to create the **osm620xx** and **nwk680xx** directories: 

```bash
mkdir /home/your-seneca-id/osm620xx /home/your-seneca-id/nwk680xx
```

   - **NOTE:** You can create multiple directories by issuing the **mkdir** command with multiple arguments.

  9. Issue the following Linux command to confirm that those directories have been created: 

```bash
ls -ld /home/your-seneca-id/osm620xx /home/your-seneca-id/nwk680xx
```

   - **Using a FULL pathname starting from the root directory (i.e. /) requires is a LOT of typing!. Since we are already located in our home directory, we don't have to start from the root directory. This is called a "relative" pathname.**

  10. We will now create the subdirectories that are contained in the **osl640xx** directory. Issue the following Linux command to move to the **osl640xx** directory using a **relative** pathname: 

```bash
cd osl640xx
```

  11. Issue a Linux command to confirm that your current location is in the _osl640xx_ directory. You should know how to issue this command from a previous tutorial.
  12. Issue the following Linux command to create the directories called **notes**, **tutorials** and **samples**:
 
```bash
mkdir notes tutorials samples
```

  13. Issue a Linux command to confirm that those directories have been created. (you should already know how to do this).

       - There are better ways to create the same directory structure without using the **cd** command.
       - Issuing the **cd** command **prior** to issuing other commands indicates to others that you are a novice or "**newbie**".
       - You can actually **lose marks** on quizzes or tests if you issue multiple Linux commands to performed tasks that can be performed using a single Linux command with **pathnames**.

  14. Issue the following Linux command to return to your home directory: 

 ```bash
 cd
 ```

  15. Issue a Linux command to confirm that you are now located in your home directory.

       - Although we will teach you how to **remove** directories and their contents in another investigation, let's remove the created directory structure' and **recreate** the same directory structure using just one command using pathnames.

  16. Issue the following Linux command to remove all of the directories that you have created:

```bash
rm -r osl640xx osm620xx nwk680xx
```

  17. Issue a Linux command to confirm that the **osl640xx**, **osm620xx** and **nwk680xx** directories have been removed.
  18. Issue the following single Linux command to create the entire directory structure:

```bash
mkdir -p osl640xx/notes osl640xx/tutorials osl640xx/samples osm620xx nwk680xx
```

   - **NOTE:** The **-p** option allows "parent" directories to be automatically created first to then create their subdirectories.

  19. Issue the following Linux command to confirm that all of the directories have been created:

```bash
ls -ld osl640xx/ osl640xx/notes osl640xx/tutorials osl640xx/samples osm620xx nwk680xx
```

**Running a Shell Script to Check your Work**

Although you are being asked to create the directory structure, you might have made some mistakes:

For Example:

  - Forgetting to create a directory.
  - Making syntax errors (eg. spelling or mixing up character case)
  - Not creating subdirectories within specified directories.

To check for mistakes, a **shell script** has been created to check your work. If the checking shell script detects an **error**, then it will provide feedback and offer constructive feedback on how to fix that problem so you can re-run the checking shell scripts until your work is correct. Errors (WARNINGS) are indicated in red as `WARNING` and should be corrected. Steps correctly done are indicated as `OK` in green

**Perform the Following Steps:**

  1. Make certain that your current directory is **your home directory.**

  2. Issue the following Linux command to run a checking script:

```bash
~/bin/lab1-check-2
```

  3. If you encounter errors, then view the feedback to make corrections, and then re-run the checking script. If you receive a congratulation message that there are no errors, then proceed to the next part.

### Part 2: Viewing Directory Contents and Copying & Moving Directories

Now that you have learned how to efficiently create your directory structure, you will now learn how to issue Linux commands to **view directory contents** as well as **copy** and **move** directories.

**Perform the Following Steps:**
  1. Install the tree command by issuing the following:
  ```bash
  sudo apt -y install tree
  ```

  2. Issue the following Linux command: 

```bash
tree
```

   - **NOTE:** You should see the directory structure that you created in the previous investigation. You can also issue the **tree** command using a directory pathname to display the directory structure for a specific scope. Some of the output from the tree command has been omitted in the following screenshot.

![Tree output](/img/3-tree.png)

Output of the tree command to display directory structure.

   - You can also use the **-R** option for the **ls** command to display all directories and subdirectories for a specified directory path (referred to as a **recursive directory listing**).

![Tree -lr output](/img/4-lsr.png)

  2. Issue the following Linux command: 

```bash
ls -lR
```

   - What directories do you see?

  3. Issue the following Linux command: 

```bash
ls -lR osl640xx
```

   - Note the differences between both of these commands (i.e. using and not using a pathname).
   - You can copy and move entire directories (and their contents) to other directories.

  4. Issue the following Linux command:

```bash
cp -R osl640xx nwk680xx
```

  5. Issue the following Linux command to display the directory structure of your home directory to confirm you copied the osl640xx directory:

```bash
tree
```

   - Output of the **tree** command to confirm copy of **osl640xx** directory (and contents) to the **xyz100xx** directory.

  6. Issue the following Linux command:

```bash
mv osm620xx nwk680xx/osl640xx/tutorials/osm620xx
```

  7. Issue the following Linux command to display the directory structure of your home directory to confirm you moved the osm620xx directory:

```bash
tree
```

   - Let's run a checking script to see if you moved and copied the directories correctly.

  8. Make certain that your current directory is **your home directory.**
  9. Issue the following Linux command run checking script:

```bash
~/bin/lab1-check-3
```

  10. If you encounter errors. make corrections and re-run the checking script until you receive a congratulations message, and proceed to the next investigation.

### Part 3: Removing Directories

In this investigation, we will learn how to **safely remove** directories and their contents.

**Perform the Following Steps:**

  1. Confirm that you are located in your home directory.

        - The **rmdir** command is used to remove empty directories.

  2. Issue the following Linux command to remove the empty directory called **tutorials**: 

```bash
rmdir osl640xx/tutorials
```

  3. Issue a command to confirm that you removed the **tutorials** directory.
  4. Issue the following Linux command to remove the empty directory called **osl640xx**: 

```bash
rmdir osl640xx
```

   - NOTE: You should get an **error message**, since the **osl640xx** directory is **NOT** empty.
   - To remove non-empty directories, you can use the **rm -r** command. 
   - The **-r** option stands for recursive, which can travel down the directory paths and their contents.

  5. Issue the following Linux command to remove the **osl640xx** directory and its contents: 

```bash
rm -r osl640xx
```

  6. Issue the **tree** command to confirm that the osl640xx directory (contained in your home directory) and its contents have been removed.

   - **NOTE:** To safely remove non-empty directories, you can add the _-i_ option which will prompt the user if they wish to remove contents as it your travel recursively down a directory to remove directories and their contents.

  7. Issue the following Linux command (entering "y" when prompted): 

```bash
rm -ri nwk680xx
```

   - **NOTE:** You should have removed all directories that you have created.
   - Let's run a checking script to confirm that you have correctly removed all of those directories.

  8. Issue the **tree** command to confirm that all of those recently created directories have been removed.
  9. Issue the following Linux command to run a checking script to confirm removal of those directories:

```bash
~osl640/week2-check-3
```

  10. If you encounter errors, make corrections and re-run the checking script until you receive a congratulations message, and proceed to the next INVESTIGATION.

## Investigation 2: Managing Text Files

Since IT students will be working in the Unix / Linux command line environment, it is useful to learn a least two common command-line **text editors.**

Although **programming students** can use **graphical IDE's** to code and compile programs, they can **create source code** using a text editor and **compile their source code** in the **Matrix** server to generate executable programs (without having to transfer them for compilation or execution).

**Networking and Tech Support students** can use a text editor to **edit configuration files**. These students in upper grades will become familiar with the process of installing, configuring, and running network services and text editors are an important tools to help setup but also "tweak" or make **periodic changes in networking services configuration.**

The two most readily-available command line text editors in Linux are **Nano** and **vi**. The Nano text editor would seem like an easier-to-use text editor, but vi (although taking longer to learn) has outstanding features and allow the user to be more productive with editing text files.

![Nano text editor 1](/img/Nano-text-editor-1.png)

The **Nano Text Editor** is Easy to Operate for Novice Users.

![Vi text editor 1](/img/Vi-text-editor-1.png)

The **vi Text Editor**, although taking longer to master, has outstanding features and allow the user to be more productive with editing text files.

### Part 1: Creating Text Files Using The Nano Text Editor

You will now learn basic editing skills using the **Nano** text editor including **creating, editing,** and **saving** text files.

**Perform the Following Steps:**

  1. Make certain that you are located in your home directory.
  2. **Create** the following directory structure (displayed on the right side) by issuing a **single Linux command** (You should know how to do this from the previous INVESTIGATION).

![Directory Structure 10](/img/Directory-structure-10.png)

  3. Issue a Linux command to check that you correctly created those directories.
  4. Issue the following Linux command to edit a text file called mytext.txt in the linux/practice directory:

```bash
nano textedit/practice/mytext.txt
```

   - **NOTE:** When using the **Nano** text editor, you are placed in **INPUT mode**, so you can enter text immediately.

  5. Enter the lines shown in the diagram of the nano text editor below:

![Nano text editor 2](/img/Nano-text-editor-2.png)

   - **NOTE:** Refer to the table below for a list of common **Nano** navigation & editing commands:

| **Key(s)** |	**Purpose** |
| :--- | :---: |
| **<ctrl\><SPACEBAR\>, <esc\><6\>** |	Move forward/backward one word |
| **<ctrl\><a\>, <ctrl\><e\>** |	Move to beginning/end of line |
| **<ctrl\><k\>**|	Cut line |
| **<esc\>6** |	Copy Line |
| **<ctrl\><u\>**	| Paste Cut/Copied Text |
| **<ctrl\><g\>** |	Display help screen (ctrl-x to exit help screen) |
| **<ctrl\><x\>** |	Save editing changes and exit |

  6. Referring to the table above, practice navigating and editing your entered lines for practice.
  7. To **save** your editing session, press: `<ctrl>x`
  8. You will be prompted to modify your file: type the letter `y` for **yes**.
  9. The name of the file will be displayed, Press `ENTER`.to save editing changes for that file name.

   - **NOTE:** This prompt for file name allows you to change the name of the file if you wish. By pressing **ENTER**, it will accept the default filename.

  10. Perform some more editing operations based on the editing chart above.
  11. **Save** your editing session and **exit** your text editor.

### Part 2: Creating Text Files Using The vi Text Editor

You will now learn basic editing skills using the **vi (vim)** text editor including **creating, editing,** and **saving** text files.

The **vi (vim)** text editor (although taking longer to learn) has outstanding features to increase coding productivity.

![Vi Screen](/img/Vi-screen.png)

The major different between nano and vi is that **vi starts in COMMAND LINE mode**. You need to issue letter commands to enter text. Also you can press colon “: ” in COMMAND mode to enter more complex commands.

**Perform the Following Steps:**

  1. Make certain that you are located in your home directory.

  2. Issue the following Linux command to edit a text file called **othertext.txt** in the **linux/practice** directory:

```bash
vi textedit/practice/othertext.txt
```

   - **NOTE:** When using the **vi** text editor, you are placed in **COMMAND** mode, so you need to issue a command to switch to _INPUT_ mode.

  3. Type the following key to enter _INPUT_ mode: `i`

      - You should notice you are in _INSERT_ mode by seeing the notification **-- INSERT --** at the bottom left-hand side of the application screen.

  4. Enter the line shown in the diagram of the vi text editor below:

![Vi text editor a](/img/Vi-text-editor-a.png)

  5. While on the first line, press the following key to enter _COMMAND_ mode: `ESC`

      - You should see the -- _INSERT_ -- notification disappear indicating that you are in _COMMAND_ mode.
      - **NOTE:** Refer to the table below for a list of the most common **vi (vim)** navigation & editing commands:

| **Key(s)** |	**Purpose** |
| :--- | :---: |
| **i** |	Enter **INPUT** mode |
| **<esc\>**	| Return to **COMMAND** MODE |
| **x** |	Delete text to the right in COMMAND mode |
| **W** |	Move forward one word in COMMAND mode |
| **B** |	Move back one word in COMMAND mode |
| **dd** |	Cut line in COMMAND mode |
| **yy** |	Copy Line in COMMAND mode |
| **p / P** |	Paste Cut/Copied Text below/above line in COMMAND mode |
| **u** |	Undo previous editing command |
| **:help** |	Display help screen in COMMAND mode |
| **:x** |	Save editing changes and exit (in COMMAND mode) |
| **:w name**	| Save editing changes to "name" in COMMAND mode |
| **:q!** |	Abort editing session and exit (in COMMAND mode) |

   - Once you can get used to working in INPUT and COMMAND mode, it is easier to perform text editing operations in **vi** via _COMMAND_ mode as opposed to nano!

  6. Type the following keys to copy the current line: `yy`
  7. Type the following key to paste the copied line: `p`

      - What did you notice?

  8. Type the following keys: `u`

      - What did you notice?

  9. Type the following keys: `3p`

      - What did you notice?

  10. Use the up or down **arrow** keys to move to the second line.
  11. Type either the **w** and/or **b** keys to move the cursor to the beginning of the word: **first**
  12. Type the **x** keys to remove the word called **first**
  13. Type the **i** key to enter INSERT mode.
  14. Type the word: **second**
  15. Press the **ESC** key to enter COMMAND mode.
  16. Repeat steps **11** to **16** to change the words for line number for lines 3 and 4.

![Vi text editor b](/img/Vi-text-editor-b.png)

   - Use a combination of **arrow** keys and the **w** and **b** keys while in COMMAND mode to change the correct words for the **third** and **fourth** lines.

  17. Move to the 4th line (i.e. last line).
  18. Type the following keys: `dd`

      - What did you notice?
      - Let's save editing changes and exit the vi text editor.

  19. Type the following keys: `:x` and press **ENTER**

      - What did you notice?

  20. Issue the same command that you performed in **Step #2** to confirm that you had properly edited that file.
  21. **Save** and **exit** your vi editing session.

![Vi text editor 2](/img/Vi-text-editor-2.png)

   - An **online tutorial** has been created to give you "hands-on" experience on how to use vi text editor. It is recommended that you run this online tutorial in your Matrix account to learn how to create and edit text files with the vi text editor.

  22. Issue the following to run the vi online tutorial:

```bash
/home/jason.carman/vi-tutorial
```

  23. In the tutorial menu, select the first menu item labelled **"USING THE VI TEXT EDITOR"**
  24. Read and follow the instructions in the tutorial. Eventually, it will display a **simulated** vi environment and will provide you with **"hands-on"** practice using the vi text editor. As far as this author is aware, there is NO "hands-on" tutorial for the nano text editor in this particular format.
  25. When you have completed that section, you will be returned to the main menu. If you want to get extra practice, you can select the menu item labelled "**REVIEW EXERCISE**".
  26. When you want to exit the tutorial, select the menu option to exit the tutorial.

It is recommended to try both text editors, and choose the text editor that you feel that is easier to use.

### Part 3: Manage & Manipulate Text File Content

We conclude this tutorial by learning to **manage**, **view** or **manipulate the display** of text files. This is HIGHLY ADVISED in case you only want to view contents and **NOT** edit text file contents which can cause accidental erasure of data.

**Perform the Following Steps:**

  1. Make certain that you are located in your home directory.
  2. Refer to the following table of **Text File Management Commands**:

| **Linux Command** |	**Purpose** |
| :--- | :---: |
| **touch** |	Create empty file(s) / Updates Existing File's Date/Time Stamp |
| **cat** |	Display text file's contents without editing (small files) |
| **more** , **less** |	Display / Navigate within large text files without editing |
| **cp** |	Copy text file(s) |
| **mv** |	Move / Rename text files |
| **rm** |	Remove text file(s) |
| **sort** |	Sorts (rearranges) order of file contents when displayed. Content is sorted alphabetically by default. The **-n** _Italic text_ option sorts numerically, **-r** performs a reverse sort |
| **head , tail** |	Displays the first / last 10 lines of a text file by default. An option using a value will display the number of lines (e.g. `head -5 filename` will display first 5 lines, `tail -5 filename` will display last 5 lines). |
| **grep** |	Displays file contents that match a pattern |
| **uniq** |	Displays identical consecutive lines only once |
| **diff** file1 file2 |	Displays differences between 2 files |
| **file** |	Gives info about the contents of the file (e.g. file with no extention) |
| **find** |	To find files matching specified characteristics: |

  3. Issue the following Linux command to create three empty text files in your current directory:

```bash
touch a.txt b.txt c.txt
```

  4. Issue the following Linux command: 

```bash
ls -l a.txt b.txt c.txt
```

   - Check the size in the detailed listing to confirm that these newly-created files are empty.

  5. Use the **nano** text editor to edit the empty file called **a.txt**.

   - Type the number "**1**" and press **ENTER**. On the second line, type the number "**2**" and press **ENTER**.
   - Continue entering increasing number values until you reach the number **40** on line 40 (refer to the diagram below).

![Vi Screen 40](/img/Vi-screen-40.png)

  6. **Save** and **exit** your editing session.
  7. Issue the following Linux command: 

```bash
cat a.txt
```

   - Can you see all of the contents?

  8. Issue the following Linux command: 

```bash
more a.txt
```

   - **NOTE:** The **more** command uses the same navigation keys as with the **man** command (refer to week 1 notes for reference). Try using keys that you used to navigate the man pages.
   - What is the advantage of using the more command?

  9. Type the letter "`q`" to exit the _more_ command.
  10. Issue the following Linux command: 

```bash
less a.txt
```

   - Is there any difference between the **more** and **less** commands? (again press **q** to quit)

  11. Issue the following Linux command: 

```bash
sort a.txt
```

   - Why does the output not look what you expected? Why?

  12. Issue the following Linux command: 

```bash
sort -n a.txt
```

   - Try the same command using both the **-n** and **-r** options to see what happens.

  13. Issue the following Linux command: 

```bash
head a.txt
```

   - What is the output from this command display?

  14. Issue the following Linux command: 

```bash
head -7 a.txt
```

   - What is the output from this command display?

  15. Issue the following Linux command: 

```bash
tail a.txt
```

   - What is the output from this command display?
   - How would you issue this command to display only the **last line** contained in that file?

  16. Issue the following Linux command: 

```bash
grep 2 a.txt
```

   - What type of output appear? Why did these lines appear (what do they all have in common)?

  17. Edit the **a.txt** file and add to the bottom 5 new lines each consisting of the same text: "**end of line**" (refer to diagram below).

![End of line image](/img/End-of-line.png)

  18. **Save** your editing session and **exit** your text editor.
  19. Issue the following Linux command: 

```bash
uniq a.txt
```

   - What do you notice happened to those newly created lines?

  20. Issue the following Linux command: 

```bash
cp a.txt a.txt.bk
```

  21. Issue the following Linux command: 

```bash
cp a.txt b.txt
```

  22. Issue the following Linux command: 

```bash
mv a.txt aa.txt
```

  23. Issue a Linux command to view the directory contents.

      - What happened to the file called **a.txt**? Why?

  24. Issue the following Linux command: 

```bash
file b.txt
```

   - What sort of information did it provide?

  25. Issue the following Linux command: 

```bash
diff aa.txt b.txt
```

   - Was there any output? If not, why?

  26. Issue the following Linux command: 

```bash
diff aa.txt c.txt
```

   - What do you think is the purpose of this output?

  27. Issue the following Linux command: 

```bash
find -P .
```

   - What is the output of this command?

  28. Issue the following Linux command: 

```bash
rm aa.txt b.txt a.txt.bk c.txt
```

  29. Issue the **ls** command to verify that these files have been removed.

## Investigation 3: Linking Files

In this investigation, you will learn how to create **hard links** and **symbolic links** on your Matrix account, and observe the advantages and limitations of using both types of links.

**Perform the Following Steps:**

1. **Login** to your matrix account.
2. Issue a Linux command to **confirm** you are located in your **home** directory.

   - **NOTE:** You will remain in your **home** directory to get practice using pathnames.

3. Issue the following Linux command to create a directory called **~/links**:

```bash
mkdir ~/links
```

4. Issue the **ls -ld** command to confirm that the directory **~/links** exists.
5. Use a text editor to create a file called **~/links/data-file.txt** (i.e. without changing to the links directory).
6. Enter the following text displayed below:

```text
This is line 1
This is line 2
This is line 3
```

7. Save your editing session and exit your text editor.
8. Issue the following Linux command:

```bash
ls -li ~/links/data-file.txt
```

- View the **i-node** number for this file. What does this i-node number represent?
- We will now create a **hard link** file to demonstrate how creating hard links are useful for **back-ups**.

![Hard link inode 1](/img/Hard-link-inode1.png)

**Hard links** share the same **i-node** with regular files on a Unix / Linux filesystem.

8. Issue the following Linux command:

```bash
ls -li ~/links/data-file.txt
```

- View the **i-node** number for this file. What does this _i-node_ number represent?
- We will now create a **hard link** file to demonstrate how creating hard links are useful for **back-ups**.

9. Issue the following Linux command to create the following **hard link** in the same directory:

```bash
ln ~/links/data-file.txt ~/links/data-file.hard.lnk
```

10. Issue the following Linux command to display _i-node_ ID numbers for both files:

```bash
ls -li ~/links/data-file.txt ~/links/data-file.hard.lnk
```

- What do you notice about both of those file's _i-node_ numbers?

11. Use a text editor to edit **~/links/data-file.txt** and **add some lines of text** to the bottom of that file.
12. Save your editing session and exit your text editor.
13. Issue the following Linux command:

```bash
cat ~/links/data-file.hard.lnk
```

- You should notice that the hard linked file also contains the additional line(s) that you added to the original file.
- This is very useful for backing up your files without using the **cp** command!

14. Use a text editor to edit the hard-linked file **~/links/data-file.hard.lnk** and add some lines to the bottom of this file.
15. Save your editing session and exit your text editor.
16. Issue the following Linux command:

```bash
cat ~/links/data-file.txt
```

- What happened to this **original** file?
- What does this mean in terms of creating hard-linked files for back-ups?

17. Issue the following Linux command to create a hard-linked file in your **home** directory:

```bash
ln ~/links/data-file.txt ~/data-file.hard.lnk
```

18. Issue the following Linux command to compare all file's _i-node_ numbers:

```bash
ls -li ~/links/data-file.txt ~/links/data-file.hard.lnk ~/data-file.hard.lnk
```

- What do you notice about all of those file's _i-node_ numbers?

19. Issue the following Linux command to check that you created those hard links:

```bash
~/bin/lab1-check-5
```

- If you encounter errors, then view the feedback to make corrections, and then re-run the checking script.
- If you receive a congratulation message that there are no errors, then proceed with this tutorial.

20. Issue the following Linux command to remove the **~/links** directory and its contents:

```bash
rm -rf ~/links
```

21. Issue a Linux command to confirm that the **~/links** directory has been removed.
22. Issue the following Linux command to view the contents of your linked file in your **home** directory:

```bash
cat ~/data-file.hard.lnk
```

- What do you notice? What does this tell you about hard links?
- We will now learn how to create **symbolic links**.

23. Issue the following Linux command to create a directory called **~/links2**:

```bash
mkdir ~/links2
```

- **NOTE:** You will remain in your **home** directory to get practice using pathnames.

24. Issue the **ls -ld** command to confirm that the directory called **~/links2** exists.
25. Use a text editor to create a file called **~/links2/text-file.txt** (i.e. without changing to the links2 directory).
26. Enter the following text displayed below:

```text
This is line one
This is line two
This is line three
```

27. Save your editing session and exit your text editor.
28. Issue the following Linux command to create the following **symbolic** link in the same directory:

```bash
ln -s ~/links2/text-file.txt ~/links2/text-file.sym.lnk
```

29. Issue the following Linux command to display i-node numbers for both files:

```bash
ls -li ~/links2/text-file.txt ~/links2/text-file.sym.lnk
```

- What do you notice about both of these file's _i-node_ numbers?
- What do you notice about the size of the file **~/links2/text-file.sym.lnk**?
- What **_pathname_** _do you think this symbolic-linked file represents_?

![Symbolic link inode 1](/img/Symbolic-link-inode1.png)

**Symbolic links** are **pointers** (i.e. pathnames) to **regular files** and **directories**. They do **NOT** share the same **i-node**.

30. Issue the following Linux command to create the following **symbolic link** in your **home** directory:

```bash
ln -s ~/links2/text-file.txt ~/text-file.sym.lnk
```

31. Issue the following Linux command to display i-node numbers for all of those files:

```bash
ls -li ~/links2/text-file.txt ~/links2/text-file.sym.lnk ~/text-file.sym.lnk
```

- What do you notice about all of those file's i-node numbers?
- What is the file size of **~/text-file.sym.lnk**?
- What **pathname** do you think this _symbolic-linked_ file contains?

32. Use a text editor to edit the **symbolic link** file called **~/links2/text-file.sym.lnk** and add some lines to the bottom of that file.
33. Save your editing session and exit your text editor.
34. Issue the following Linux command to view the contents of the **original** file:

```bash
cat ~/links2/text-file.txt
```

- What did you notice? This happened because when you edited the symbolic-linked file, you were redirected (via _pathname_) to the original file.

35. Use a text editor to edit the **original** file called **~/links2/text-file.txt** and add some lines to the bottom of that file.
36. Save your editing session and exit your text editor.
37. Issue the following Linux command to view the contents of the **symbolic** linked file:

```bash
cat ~/links2/text-file.sym.lnk
```

- What did you notice? Again, when you view the contents of the symbolic-linked file, you are redirected (via _pathname_) to the original file.

38. Issue the following Linux command to check that you created those symbolic links:

```bash
~/bin/t1-check-6
```

- If you encounter errors, then view the feedback to make corrections, and then re-run the checking script.
- If you receive a congratulation message that there are no errors, then proceed with this tutorial.

39. Issue the following Linux command to remove the **~/links2** directory:

```bash
rm -rf ~/links2
```

40. Issue a Linux command to confirm that the **~/links2** directory has been removed.
41. Issue the following Linux command to view the contents of the **original** file called **~/links2/text-file.txt**:

```bash
cat ~/text-file.sym.lnk
```

- What happened? Why did does this happen?

42. Issue the following Linux command:

```bash
ls -l ~/text-file.sym.lnk
```

- This output indicates a "**broken link**" and indicates this is not an effective method of backing up files.

![Symbolic link inode 3](/img/Symbolic-link-inode3.png)

Example of a **broken link** when a symbolic link points to a **non-existent file**.

43. Issue a command to delete the **~/text-file.sym.lnk** file which is a _broken link_.
44. Issue the following Linux command:

```bash
ln -s /etc ~/etc
```

45. Issue the following Linux command:

```bash
ls -ld ~/etc
```

- What do you notice? Symbolic links are good for creating "short-cuts" to both **regular files** and **directories**.

![Symbolic link inode 2](/img/Symbolic-link-inode2.png)

**Symbolic links** can be used to point to **directories** as well as regular files. Symbolic links can also point to files on **other** Unix/Linux filesystems.

46. Remove the ~/etc directory.
```bash
rm -rf ~/etc
```

46. Complete the **LINUX PRACTICE QUESTIONS** below to get additional practice.


## Linux Practice Questions

The purpose of this section is to obtain **extra practice** to help with your **lab test**, and your **theory test**.

Your instructor may take-up these questions during class. It is up to the student to attend classes in order to obtain the answers to the following questions. Your instructor will NOT provide these answers in any other form (eg. e-mail, etc).

**Review Questions:**

For each of the following questions, use a pathname starting from the **root** directory (i.e. “/”).

  1. Write a single Linux command to create the directory structure starting from your home directory from the diagram displayed below:

![Tree Diagram](/img/Tree-diagram.png)

  2. Write a Linux command to display a detailed listing of **history** directory.

        - How would this command differ if you wanted to also view hidden files as well?

  3. Write a Linux command to change to the **project** directory.
 
        - What command would you issue to return to your home directory?

  4. Write a Linux command to copy the **project** directory and its contents to the **history** directory.
  5. Write a Linux command to move the directory called **directories** to the **history** directory.
  6. Write a Linux command to remove both directories named **1** and **2**.
  7. Write a Linux command to remove the **concepts** directory and its contents.
  8. Write a Linux command to remove the **concepts** directory and prompt the user if they want to remove this directory’s contents.
  9. Write a single Linux command to create the following empty files in the concepts directory:
 
        - **myfile.txt**
        - **yourfile.txt**
        - **thefile.txt**

  10. Write a Linux command to view the contents of the myfile.txt text file to prove it is empty. What is the difference between the commands: **cat**, **more** and **less**?
  11. Write a Linux command to sort the contents of a file called **practice/customers.txt**
  12. Write a Linux command to display the first 4 lines of a file called **practice/customers.txt**
  13. Write a Linux command to display the last line of a file called **practice/customers.txt**
  14. Write a Linux command to match a line containing the pattern **Linux** in a file called **practice/customers.txt**
  15. Write a Linux command to display unique occurrences of consecutive lines in a file called **practice/customers.txt**
  16. Create a **table** listing each Linux command, useful options that are displayed near the top of this tutorial labelled: **Tutorial Reference Material**
  
  **Hard Links:**

  17. What is the purpose of creating a hard-link?
  18. What is a limitation of a hard link?
  19. Write a single Linux command to create a hard link called **~/backup/myfile.txt.lnk** for the existing file called **~/myfile.txt**
  20. Write a single Linux command to display the **i-node** number for both files. Are the **i-node** numbers identical?
  
  **Symbolic (Soft) Links:**
  
  21. What is the purpose of creating a symbolic (soft) link?
  22. What is a limitation of a symbolic (soft) link?
  23. Write a single Linux command to create a symbolic link called **~/shortcuts/murray.saul.lnk** to the existing directory called **~murray.saul**
  24. Are the i-node numbers identical for both of those files?
  25. What data is contained in the file called **~/shortcuts/murray.saul.lnk**?
---

Author: Murray Saul

License: LGPL version 3 Link: https://www.gnu.org/licenses/lgpl.html

---
