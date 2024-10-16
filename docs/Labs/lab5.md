---
id: lab5
title: Lab 5 - File Transfer and Sending Email Messages
sidebar_position: 6
description: Lab 5 for Students to Learn File Transfer and Sending Email Messages
---

# Lab 5: File Transfer and Sending Email Messages

## Main Objectives of this Practice Tutorial

- List **common utilities** contained in the **ssh** application framework
- Securely **copy** files between Unix/Linux servers using the **scp** command
- Securely **transfer** copies of files between Unix/Linux servers using the **sftp** command
- Use the **ssh** command to run and view commands on a **remote computer** from a **local computer**.
- Use the **mail** command to send email with **file attachments** to your Seneca email account

## Tutorial Reference Material

**Course Slides:**

- Week 6 Lecture 1 Notes: [Web](https://docs.google.com/presentation/d/e/2PACX-1vRSl6boabHb-XxCQpqwtrH1w5MiNdvH9EzNqGnk-6XTl_HAd5QD7yBv9x8oJkQJON9_10915zONeht0/pub?start=false&loop=false&delayms=3000)

**Definitions:**

- [Secure Copy](https://en.wikipedia.org/wiki/Secure_copy)
- [Secure File Transfer Protocol](https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol)
- [Email](<https://en.wikipedia.org/wiki/Mail_(Unix)>)

**File Transfer Commands:**

- [scp](http://man7.org/linux/man-pages/man1/scp.1.html)
- [sftp](http://man7.org/linux/man-pages/man1/sftp.1.html)
- [mail](https://man.openbsd.org/mail)

## Key Concepts

The ssh Linux command is a suite of tools to allow the user to issue Linux commands securely between Unix / Linux servers, as well as securely copy and transfer files among Unix/Linux servers.

In this tutorial, you will learn several different methods to securely transfer files from your Matrix Linux account to other computers using Linux commands including scp, sftp and mail.

### Issuing Commands on Remote Unix/Linux Servers

You can use the **ssh** command to issue Unix/Linux commands on a **remote** server from your local computer without logging into a remote server (such as Matrix).

![SSH Remote](/img/Ssh-remote.png)

The **ssh** command can be used to run and view commands on **remote computer** from a **local computer**.

_Command Usage:_

```bash
ssh username@matrix.senecapolytechnic.ca ls -l
```

You will be prompted for your Matrix account password, then the contents of your home directory in your remote Matrix account will be displayed on your local computer's terminal.

### Secure Copy (scp)

The **scp** command is used to securely copy files between your **local** computer and **remote** Unix/Linux server. The usage for the _scp_ command is similar to the **cp** command with the addition of **user name** and **host name**.

![SCP Diagram](/img/Scp-diagram.png)

The **scp** Unix/Linux command is used to securely copy files between Unix/Linux servers.

_Command Usage:_

```bash
scp local.file username@host:destination-pathname
```

```bash
scp local.file username@host:
```

```bash
scp user@host:file-pathname local-pathname
```

The most common **mistake** that students make is forgetting to add the **colon** character ":" after the remote hostname.

The user name in the command can be **omitted** if it's the same as on the local host. Multiple file and recursive directory copy (i.e. option **-r**) is supported.

### Secure File Transmission Control Protocol (sftp)

**FTP** stands for **File Transfer Protocol** which provides a set of **rules** on how to convert data that is transferred between computers (both identical and different operating systems). The **sftp** command performs file transfers securely using encryption.

![SFTP Diagram](/img/Sftp-diagram.png)

The sftp Unix/Linux command is used to securely transfer (copy) files between Unix/Linux servers.

_Command Usage:_

```bash
sftp username@hostname
```

When you login via the _sftp_ command, the **sftp prompt** appears. The sftp prompt is like a Bash shell prompt, but with a limited number of commands. When issuing sftp commands, the local server relates to the server where you first issued the sftp command. Refer to the diagram on the right for local and remote sftp commands.

**Graphical SFTP Applications**

Although it is important to know how to use the **sftp** command for _quizzes, midterm_ and _final exam_, there are **graphical sftp applications** that provide an alternative to issuing commands.

![Graphical SFTP App](/img/Graphical-sftp-application.png)

If you installed the graphical **Secure Shell Client** application in your Windows computer from performing [LAB 1A INVESTIGATION 1](./lab1a.md#investigation-1-accessing-your-matrix-linux-account), you can use this application to transfer files between your computer and your Matrix account by graphically **navigating, selecting** and **dragging** files between computers.

### Sending Emails with File Attachment (mail)

You can use the **mail** command in Matrix to send email messages to other email accounts via the Internet.

**Sending a Simple Email Message:**

1. Type: **mail username@hostname** and press **ENTER**
2. Enter **subject line** and press **ENTER**
3. Type the **body of the message** and then when finished, press **ctrl+d** to send message

**Sending an Email Message with a File Attachment:**

1. Type: **mail username@hostname -a filepathname** and press **ENTER**
2. Enter **subject line** and press **ENTER**
3. Type the **body of the message** and then when finished, press **ctrl+d** to send message

**Alternative Method of Sending an Email Message with a File Attachment:**

1. Type: **mail -s "subject line" username@hostname < filepathname**
2. Press **ENTER** to send

![Mail Diagram](/img/Mail-diagram.png)

**NOTE:** You would have to use this method since you have used **stdin** redirection to attach the file’s so you can’t input the subject line from the terminal!

![Mail Diagram 2](/img/Mail-diagram-2.png)

Viewing email with file attachment in **Seneca email account**.

## Investigation 1: File Transfer (Secure Copy)

**ATTENTION: This online tutorial will be required to be completed by Friday in week 8 by midnight to obtain a grade of 2% towards this course**

The **SSH** package on your _home computer_ and on the _Matrix Linux server_ contain a **suite** (i.e. collection) of secure utilities including **ssh** and **scp**.

In this investigation, you will learn how to use the **scp** command to **securely copy files** between your computer and your Matrix Linux server. This methods is useful because it can be performed in the _MS-Windows, MacOSx_, and _Unix/Linux_ operating systems.

You will also learn how to issue the **ssh** command to run commands on your **remote** Matrix server while remaining on your **local** computer.

**Perform the Following Steps:**

1. **Start** your Ubuntu VM, **login**. Launch a **terminal** and issue a command to **confirm** you are located in your **home** directory.

2. Issue to the **pwd** command to confirm you are in your home directory.
3. Issue the following Linux command to create the following directory:

```bash
mkdir ~/local
```

4. Change to the **~/local** directory and confirm that you have changed to that directory.
5. Use a text editor to create a text file called **myfile.txt**
6. Enter the following two lines displayed below in your editing session:

```text
This is my file
It is a small file
```

7. **Save** editing changes to your _myfile.txt_ file and exit your text editor.
8. Let's run a **shell script** to check that you created the **local** directory and that you created the **myfile.txt** file (with correct file contents) in that directory.

   - Enter the following command:

```bash
~/bin/lab5-check-1
```

9. If you encounter errors, make corrections and then re-run the checking script until you receive a congratulations message, and proceed to the next step.

- **NOTE:** We will now learn to transfer files between your **local home computer** and your **remote Matrix Linux server**.

- **NOTE:** You can access matrix on the Seneca lab PCs without any additional steps. To remote access from home you are **required** to install and configure the **Global Protect VPN** on your host system. For steps, please access:

### Connecting to the Seneca Student VPN

All Seneca Polytechnic students are required to connect to the **Seneca Student VPN** in order to be able to connect to their **Matrix** Linux account when outside of campus as a **network security** measure. The Seneca Student VPN uses multi-factor authentication (MFA) when logging in to verify you are who you say you are.

**Multi-factor authentication** is an electronic authentication method in which a computer user is granted access to a website or application only after successfully presenting two or more pieces of evidence (or factors) to an authentication mechanism: knowledge (something the user and only the user knows). _Reference: https://en.wikipedia.org/wiki/Multi-factor_authentication_

You should have received an e-mail message with instructions on how to set up your smartphone for multi-factor authentication. If you haven't installed it yet, please do so by following the ITS instructions here: https://students.senecapolytechnic.ca/spaces/186/it-services/wiki/view/1024/vpn

In the next investigation, you will learn how to **connect** to and **login** to your Matrix server account from a remote computer such as your **home desktop computer, laptop** or **tablet** computer.

![Seneca Student VPN](/img/Gp1.png 'Seneca Student VPN')

10. Issue the following command to login to the **Matrix cluster** but **remain** in the command terminal on your **local** computer.

```bash
ssh username@matrix.senecapolytechnic.ca
```

    - **ATTENTION:** You are required to **remain** in your **local** computer's command terminal for the remainder of this INVESTIGATION and INVESTIGATION 2.

11. The **mkdir** command works with _MS Windows/UNIX/Linux/MacOSx_ computers. Issue the following command on Matrix to create a directory called **remote**:

```bash
mkdir remote
```

12. The **cd** command works with _MS Windows/UNIX/Linux/MacOSx_ computers. Issue the following command on your local computer to change to the **remote** directory:

```bash
cd remote
```

13. Issue the `pwd` command to confirm you are in the remote directory.

14. Use **nano** or **vim** to create a file called **other.txt** in your **remote** directory.

    - We will use the **scp** command to copy the local file called **other.txt** to your home directory on your remote Matrix Linux server.

15. Logout from Matrix by issuing the **logout**, **exit** or **CTRL + D** combination.
16. Issue the following Linux command to copy the **other.txt** file from your local machine to your remote Matrix server (replace yoursenecaid is YOUR Seneca ID and **ADD A COLON : TO THE END OF THE COMMAND**):

```bash
scp yoursenecaid@matrix.senecapolytechnic.ca:/home/yoursenecaid/remote/other.txt ~/local/other.txt
```

17. When prompted, enter your **Matrix password.**

    - **TIP:** You can issue the ssh command, followed by a command that will be run on your remote computer, but display on your local computer **without** having to establish a continuous connection to your remote Matrix server.

18. Issue the following command to confirm the file was copied.

```bash
ls -l ~/local
```

![SCP Diagram 2](/img/Scp-diagram-2.png)

- Let's copy the file called **myfile.txt** in the **~/remote** directory that you created earlier on your **Ubuntu** VM to your Matrix account in the **remote** directory on your home computer.

19. Issue the following Linux command (replace yoursenecaid is YOUR Seneca ID) to confirm you properly copied that file to Matrix. The period "." as **second argument** represents your current directory on your local computer):

```bash
scp ~/local/myfile.txt yoursenecaid@matrix.senecapolytechnic.ca:/home/yoursenecaid/remote/myfile.txt
```

20. Use a text editor (vim or nano) to create a text file called `mytextfile.txt` in the `local` directory, type some text and then save it.
21. Issue the **ls** command to confirm that your newly-created file exists in your **local** directory.
22. We are going to intentionally make a **mistake** with the **scp** command.

    - Issue the following Linux command to copy the **mytextfile.txt** file from your local machine to your remote Matrix server (replace yoursenecaid is YOUR Seneca ID and DO NOT INCLUDE THE : at the end of the command so see what happens):

```bash
scp mytextfile.txt yoursenecaid@matrix.senecapolytechnic.ca
```

- Did you notice anything different (i.e. no password)?

23. Issue the following command (using your matrix username):

```bash
ssh yoursenecaid@matrix.senecapolytechnic.ca ls -l mytextfile.txt
```

24. When prompted, enter your password and press ENTER.

    - **The file mytextfile.txt does NOT appear in your home directory on your Matrix server! Note that the COLON was NOT added to the end of the command! Therefore, you MUST remember to include the COLON : at the end of the hostname, or it will NOT remotely copy the file!**

25. Issue the following command to properly copy that same file to your Matrix server:

```bash
scp mytextfile.txt yoursenecaid@matrix.senecapolytechnic.ca:
```

26. Issue the following command to confirm that it was remotely copied to your **home** directory in Matrix:

```bash
ssh yoursenecaid@matrix.senecapolytechnic.ca ls -l /home/yoursenecaid/mytextfile.txt
```

- Do you see the output for the detailed file listing of **mytextfile.txt**?
- What does this indicate?

27. Issue the following command to create the **~/remote** directory on Matrix

```bash
ssh yoursenecaid@matrix.senecapolytechnic.ca mkdir /home/yoursenecaid/remote
```

28. Issue the following command to copy the **other.txt** file on your local computer to the **~/remote** directory in Matrix renaming it as **different.txt**:

```bash
scp other.txt yoursenecaid@matrix.senecapolytechnic.ca:remote/different.txt
```

29. Issue the following command to confirm that the file was remotely copied to your **~/remote** directory in Matrix with a different filename:

```bash
ssh yoursenecaid@matrix.senecapolytechnic.ca ls -l /home/yoursenecaid/remote/different.txt
```

- Were you able to properly copy this file?
- Let's issue a checking script remotely to see that you properly copied that file from your local computer to your remote Linux server to both your **home** directory and **~/remote** directory.

30. Issue the following:

```bash
~/bin/lab5-check-2
```

- If you encounter errors, re-run the scp commands to correct and re-run the above command until you receive a congratulations message.

31. Remain in the terminal on your local VM and proceed to INVESTIGATION 2.

In the next investigation, you will use the **sftp** Linux command to transfer (i.e. copy) files between your local computer and the Matrix server.

## Investigation 2: File Transfer (Secure FTP)

The **SSH** package on your _home computer_ and on the _Matrix Linux server_ contain a **suite** (i.e. collection)of secure utilities including **ssh** and **sftp**.

In this investigation, you will learn how to use the **sftp** command to **transfer** files between Unix/Linux servers. This methods is useful because it can be performed in the _MS-Windows, MacOSx,_ and _Unix/Linux_ operating systems.

You will also learn how to issue the **ssh** command to run commands on your **remote** Matrix server while remaining on your **local**computer.

### Command Line Terminal (CLI)

Let's look at using the **sftp** command on your **local** machine.

**Perform the Following Steps:**

1. Make certain that you are in a command terminal on your local computer (i.e. do **NOT** log into your Matrix account).
2. Issue a command to confirm that you are located in the **local** directory in your home computer.

![CMD](/img/Cmd.png)

3. Use **vi** or **nano** to create a file called `thefile.txt` in your `local`. Enter a few lines of text, **save** and **exit**.

4. Issue the **ls** command to confirm the file `thefile.txt` has been created.

   - **Note:** the relative pathname symbols "." and ".." work for the _Windows/MacOSx/Unix/Linux_ operating systems.

5. Issue the following command to move to the **parent** directory:

```bash
cd ..
```

6. Issue the **ls** command for other operating systems).

7. Issue the following command to start an **sftp** session (note: yoursenecaid is YOUR Seneca ID):

```bash
sftp yoursenecaid@matrix.senecapolytechnic.ca
```

- **NOTE:** You may be required to enter **yes** to have the public key shared.

8. You should be in the **sftp command prompt** where you are expected to issue **sftp commands**. Please take a moment to view common local and remote _sftp_ commands on the table below.

| **Operation**                     | **sftp Command** (Local Server) | **sftp Command** (Remote Server) |
| :-------------------------------- | :-----------------------------: | :------------------------------: |
| Display current working directory |            **lpwd**             |             **pwd**              |
| Display directory contents        |             **lls**             |              **ls**              |
| Create directory                  |           **lmkdir**            |            **mkdir**             |
| Change directory location         |             **lcd**             |              **cd**              |
| Upload file to remote server      |             **put**             |                                  |
| Download file to local server     |             **get**             |                                  |

9. Issue the following sftp command:

```bash
pwd
```

- What is the pathname? Which server does this represent: local or remote?

10. Issue the following sftp command:

```bash
lpwd
```

- What is the pathname? Which server does this represent: local or remote?

11. Issue the following sftp command to create a directory on your remote server:

```bash
mkdir remote2
```

12. Issue the following sftp command to confirm that the **remote2** directory has been created in your _remote_ server's home directory:

```bash
ls
```

13. Issue the following sftp command to change to the **remote2** directory on your remote server:

```bash
cd remote2
```

14. Issue the **pwd** _sftp command_ to confirm that you have changed to the _remote2_ directory on your remote server.

15. Issue the following sftp command to change to the **local** directory on your local computer:

```bash
lcd local
```

16. Issue the **lpwd** _sftp command_ to confirm that you have changed to the _local_ directory on your local computer.

17. Issue the following _sftp command_ to transfer the file called **thefile.txt** to the **~/remote2** directory on your remote server:

```bash
put thefile.txt
```

18. Issue the **ls** sftp command to confirmed that you transferred the file called: **thefile.txt**

    - Let's create another directory on your local computer called **local2** so we can learn to download a file from your remote directory.

19. Issue the following sftp command to change to the **parent** directory on your local computer:

```bash
lcd ..
```

20. Issue the **lpwd** _sftp command_ to confirm that your current working directory on your local computer is your home directory.

21. Issue the following _sftp command_ to create the following directory on your local computer:

```bash
lmkdir local2
```

22. Issue the following _sftp command_ to change to the **local2** directory on your local computer:

```bash
lcd local2
```

23. Issue the **lpwd** _sftp command_ to confirm you have changed to the **local2** directory on your local computer.

    - Let's learn to download a file from your remote server to your local computer.

24. Issue the following **sftp command** to transfer your **thefile.txt** file from the **remote2** directory on your remote server to your local computer:

```bash
get thefile.txt
```

25. Issue the **lls** _sftp command_ to confirm that you transferred the file **thefile.txt** to your local computer.

26. Issue the following _sftp command_ to exit the sftp utlilty: `exit`

27. Issue the following Linux command to remotely run a checking script to ensure you created the correct directories and properly transferred those created files:

```bash
~/bin/lab5-check-3
```

28. If you encounter errors, make corrections and then re-run the checking script until you receive a congratulations message.

    - In the next investigation, you will learn an alternative way to transfer a file to another computer server by sending an **e-mail message with an attached file**.

## Investigation 3: File Transfer (Email)

The **Matrix** server is also an **email server** that can allow you to **send** emails messages to other email accounts.

In this investigation, you will learn how to **transfer** a file from your Matrix server to another computer by sending an **email message** with a **file attachment**.

**Perform the Following Steps:**

1. Issue the following Linux command to login to your **Matrix** account.

```bash
ssh yoursenecaid@matrix.senecapolytechnic.ca
```

2. Confirm that you are located in your **home** directory.

3. Issue the following Linux command (using your Seneca-ID):

```bash
mail yoursenecaid@myseneca.ca
```

4. When prompted, enter the **subject line**: `Test Message` and press `ENTER`

5. In the email message **BODY** section, type the following text displayed below (and press **ENTER**):

```text
This is a test email message
```

6. Press `ctrl-d` to send your email message.

   - Did any output display? What you do think **EOT** stands for?

7. Launch a **web-browser**, login into your **Seneca email** account and check for new email messages. Did you receive the email message that you sent from your Matrix server?

   - If you did NOT receive an e-mail message, check the **JUNK** or **CLUTTER** folders.
   - If you still did not receive an email message, return to your terminal and re-issue the **mail** command making certain that you pressed `ctrl-d` instead of pressing **ctrl-c**

8. Return to your terminal (i.e. Linux Bash shell) and issue the following Linux command:

```bash
mail -a ~/remote/myfile.txt yoursenecaid@myseneca.ca
```

9. When prompted, enter the subject line: `Test Message with Attachment` and press `ENTER`

10. In the email message **BODY** section, type the following text displayed below (and press **ENTER**):

```text
This is a test email message with a file attachment
```

11. Press `ctrl-d` to send your message.

12. Switch to your Seneca email and check for new email messages.

    - Did you receive that email message? Does the email contain a file attachment?

13. Return to your Linux Bash shell and issue the following Linux command:

```bash
mail yoursenecaid@myseneca.ca < ~/remote/myfile.txt
```

- What happened? Were you prompted for subject and could you enter text in email body?
- Did you see a file attachment as a separate file, or just text?

14. Check your email to see if you received your email message.

    - **You won't receive this e-mail.** The mail command won't send messages without a subject line. Because you redirected that text file into mail, you weren't prompted for a subject line and the process silently failed.
    - You can use the **-s** option, followed by text (in quotes) to specify a **subject line**.

15. Return to your Linux Bash shell and issue the following Linux command:

```bash
mail -s "email with attachment" yoursenecaid@myseneca.ca < ~/remote/myfile.txt
```

16. Check your email to see if you received your email message. If you did, what do you notice this time?

    - As you've seen, redirecting a text file into mail causes the contents of that file to become the body of your message.

17. Let's combine all this together. First, create a new text file, `~/remote/body.txt`, with the following content:

```text
This is the body text of my e-mail message saved in a text file.
```

18. We're now going to combine the following options:

    - -s: Subject line
    - -a: Attach a file (~/remote/myfile.txt)
    - Redirect the contents of a file to provide the body of the e-mail message. (~/remote/body.txt)
    - Supply the destination e-mail address.

```bash
mail -s "Fully non-interactive e-mail with attachment." -a ~/remote/myfile.txt yoursenecaid@myseneca.ca < ~/remote/body.txt
```

19. Notice the order of options in the command's syntax. The destination e-mail address **must be the last option _before_ the redirect**.

20. Check your inbox and confirm you've received this last message.

21. After completing this INVESTIGATION, perform the _Linux Practice Questions_ section below.

## Linux Practice Questions

The purpose of this section is to obtain **extra practice** to help with your **midterm**, and your **final exam**.

Your instructor may take-up these questions during class. It is up to the student to attend classes in order to obtain the answers to the following questions. Your instructor will NOT provide these answers in any other form (eg. e-mail, etc).

**Review Questions:**

1. Write a Linux command to copy a file in the current directory called **mytext.txt** from your Matrix account to your account called **user1** on the Linux server domain name called **tech.myserver.com** to that user’s home directory.
2. Write a Linux command similar to the previous question, but rename the file on the remote Linux server to **yourtext.txt**
3. Write a Linux command to copy a file called **~/project/linux.txt** to the remote server called **linux.techie.org** (your username for this remote server is the same username for your local server).
4. Write a Linux command to connect to the username **saulm** for the server domain name **tux.senecac.on.ca** to transfer files between Linux servers.
5. Assuming that you are connected to that server in _question #4_. What is the sftp command to display your current working directory on your local server?
6. Assuming that you are connected to that server in _question #4_. What is the sftp command to view files in your local server? What is the sftp command to view files in your remote server?
7. Assuming that you are connected to that server in _question #4_. What is the sftp command to download the file answers.txt from the current directory of your remote server?
8. Assuming that you are connected to that server in _question #4_. What is the sftp command to upload the file questions.txt from your local server to the **~/documents/tests** directory on your remote server?
9. Assuming that you are connected to that server in _question #4_. What is the sftp command to quit your current session?
10. Write a Linux command to send the attached file **message.txt** to the email address **murray.saul@senecapolytechnic.ca** with the subject line: **Important Message**
11. Create a **table** listing each Linux command, useful options and command purpose for the following Linux commands: **scp , sftp , mail**.
12. Create a **table** listing each **sftp command** and it's purpose.

---

Authors: Murray Saul & Jason Carman

License: LGPL version 3 Link: https://www.gnu.org/licenses/lgpl.html

---
