---
id: tutorial10
title: Tutorial 10 - Users and Groups
sidebar_position: 10
description: Create and manage users and groups
---

# Tutorial 10: Users and Groups

## Under Development

## Main Objectives of this Tutorial

- Import a VM (Ubuntu 24.04)
- Login as a normal user
- Verify network connectivity using ping
- Create users
- Configure sudo
- Update the system
- Install packages
- shutdown and reboot your system from the command line

## Tutorial Reference Material

**Course Slides:**

- Week 12 Lecture 1 Notes: [Web](https://docs.google.com/presentation/d/e/2PACX-1vQ4ypYtNouQhbWpxslS8BOPnDbs9R6SsrbLoaE5heyp7JAPx_ZtCYmR0SMznvclZoeXa0NvhKe3mVd_/pub?start=false&loop=false&delayms=3000)

**Installing Linux:**

| [Linux Installation Choices](https://www.linux.com/training-tutorials/linux-installation-choices/) | [Live Linux Definition](https://en.wikipedia.org/wiki/Live_CD) | [Virtualization Definition](https://en.wikipedia.org/wiki/Virtualization) | [ISO Definition](https://en.wikipedia.org/wiki/Optical_disc_image) | [VPN Definition](https://en.wikipedia.org/wiki/Virtual_private_network) |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------- |

**Commands:**

- [sudo](https://man7.org/linux/man-pages/man8/sudo.8.html)
- [ping](https://man7.org/linux/man-pages/man8/ping.8.html)
- [apt](https://ss64.com/bash/apt.html)

**Ubuntu Resources:**

- [Ubuntu Website](https://ubuntu.com/)
- [Ubuntu 24.04 Documentation](https://help.ubuntu.com/lts/ubuntu-help/index.html)

## KEY CONCEPTS



## Investigation 1: Downloading and importing the Ubuntu 24.04 VM



## Investigation 2: System Administration

When the system has rebooted, login as you did in investigation 1. In this investigation, you will add a user, give your new user access to sudo, install software & ssh into Matrix.

Create a user with your MySeneca username:

```bash
sudo adduser senecausername
```

Follow the prompts on screen to:

- give yourself a password
- set your full name

Previously, you used the **su** command to switch to root. You can also use this to switch to any other user temporarily. You will now use this to switch to your user, to test it. Issue the following command:

```bash
su - senecausername
```

Issue the following commands and record the output:

- ls
- ls -l
- hostname
- pwd
- whoami

**whoami** should output your username. **sudo whoami** will not execute, as your user hasn't been given sudo access. Type **_exit_** to return to the **ubuntu** user.

Add your user to the sudo group using the following command as an example.

```bash
sudo usermod -aG sudo senecausername
```

Switch to your user again, and issue **sudo whoami**. It should work this time.


Answer yes when prompted.

Test the installed packages as you wish. **man-db** and **mandoc** added the **man** utility, which you learned about previously.

You are going to SSH to Matrix from the command line. If you are using a Seneca PC, you do not need the Global Protect VPN. If you are using your VM on your Laptop or at home, you will require the Global Protect VPN installed and running on your host system before you proceed.

Test SSH to Matrix from the command line:

```bash
ssh senecausername@matrix.senecapolytechnic.ca
```

Disconnect from Matrix.

On your **Ubuntu VM** switch to root and run this command to submit:

submit

Follow the prompts. You should receive an on screen and email confirmation indicating Tutorial 10 has been completed.

## Linux Practice Questions

1. How can you use ping to test network connectivity?
2. Why is an Internet connection necessary for updating Linux and installing software?
3. What package manager does Ubuntu use?
4. How to you execute a command with elevated (root) privileges?
5. What does useradd do?
6. What is the sudo group?
7. How do you switch users from the command line?
