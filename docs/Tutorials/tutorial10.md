---
id: tutorial10
title: Tutorial 10 - Mini Project
sidebar_position: 10
description: Tutorial 10 is a mini project for students to put several skills together
---

# Tutorial 10: Mini Project

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

### Installing Linux

Having a Linux system on your home computer provides **access** to a large selection of **open source software**.

Installing your own version of Linux on your notebook or desktop computer also can make it easier to practice working in the Linux environment and **learn** how to perform routine **Linux OS administration tasks**.

_A **Linux distribution** (often abbreviated as distro) is an operating system made from a software collection that is based upon the Linux kernel and, often, a package management system. Linux users usually obtain their operating system by downloading one of the Linux distributions, which are available for a wide variety of systems..._

Reference: https://en.wikipedia.org/wiki/Linux_distribution

![Common Linux Distributions](/img/Distro-1.png)

_Steps in the Linux Installation Process:_

- **Select** a _Linux Distribution_ to **download** (ISO image file or VM file).
- **Create** VM and **install** Linux Distribution or **run** VM file.

### Virtualization

_Virtualization is the process of running a virtual instance of a computer system in a layer abstracted from the actual hardware_. Reference: https://opensource.com/resources/virtualization

The virtualized OS is installed and run in a window under another OS. Special software is used to manage the entire process, referred to as the **hypervisor**. There are many reasons to use a virtual machine, such as testing & modifying a system's configuration without effecting a production system.

**Advantages** of Virtualization:

1. You can run VM from an **ISO image file** or a **VM file**.
2. One or more virtual machines can be run at the same time.
3. The **guest** OS **shares hardware** with the **host** OS and possibly other virtualized systems.
4. The **guest** systems have **network access** through the host.

**Installation Tips:**

1. Virtualization requires a **compatible processor**: not all processors support that feature.
2. Your **BIOS** should be set to **enable Virtualization**.
3. Popular VM software for **Windows**, **Apple** and **Linux** OS include:

   - VMware (Paid - though free to you through Seneca)
   - Oracle Virtual Box (Free and Open Source)

You will be using Oracle Virtual Box.

## Investigation 1: Downloading and importing the Ubuntu 24.04 VM

In this investigation you will be downloading and importing a pre-configured Ubuntu minimal virtual machine (VM). A minimal installation has limited software installed. In this case, packages you are used to using such as **VIM** and **Nano** aren't present. You will want an external drive to save your VM on.

Download the VM using the following [link](https://senecafts.senecapolytechnic.ca/link/6AK1iAxeKh87D0IrZ9drVU). You will need to enter your Seneca email address. The **FileLink Password** is **ubuntu**.

Extract the VM using the File Explorer in Windows. Browse to the file (likely in your Downloads folder), right click on it and click **extract**.

![Extracting VM](/img/extract-vm-windows.png)

**On a College PC:**

- launch **MyApps** and login.
- In the search bar, search for **virtualbox**
- Select virtualbox and click **launch**
- Import the VM

**On Your PC:**
Download [Virtual Box](https://www.virtualbox.org/wiki/Downloads) and install it.

- Launch virtualbox
- Import the VM
- Power on the VM
- Login using the following credentials:
  - Username: **ubuntu**
  - Password: **ubuntu**

One of the first things you do on a new system is install software and update the system. Your first step to installing software should always be to test your Internet connectivity, as without a working connection you cannot resolve anything. To do this we can use the tool **ping**, which is commonly used to troubleshoot network connectivity issues.

Useful addresses to ping to verify network connectivity are the following:

- www.google.com

If that fails, you could try pinging:

- 8.8.8.8, or 8.8.4.4
- Your default gateway

  8.8.8.8 and 8.8.4.4 are two publicly available DNS servers Google provides for free use. You can use these to test external network connectivity. For example, if pinging **www.google.com** fails, but pinging **8.8.8.8** succeeds it is likely you have an issue with DNS resolution.

If pinging **8.8.8.8** also fails, the problem is likely on your local network. You could try pinging your default gateway to confirm whether it is reachable or not. Common issues are:

- Wrong default gateway configured
- Default gateway is down
- Unplugged or broken network cable

Since you are dealing with a virtual machine, unplugged or broken cables aren't an issue. The other two are still possible.

Ping www.google.ca. Proceed to the next step only if it is successful.

```bash
ping www.google.ca
```

Next, verify your IP address configuration.
```bash
ip a
```

Notice you have two NICs (Network Interface Cards). 
- **lo** which is your **loopback**, and is assigned the IP address **127.0.0.1/8** by default
- **ens??** where ?? represents two digits: ie ens33. This is the NIC connected to the virtual network, which allows communication between your VM and the Internet through your Host PC.

Now, lets look at your routing table. Your routing table tells you what networks your VM knows about, as well as the default route. The default route is where packets are sent when they don't match any other entry in your routing table.
```bash
ip route
```

Viewing your IP address configuration and routing table can be useful tools for troubleshooting network connectivity issues. Ping and traceroute are useful tools for verifying a particular destination is reachable. Traceroute has the added benefit of showing you where the packets are failing.

Next, you are going to issue a command to convert your minimal installation to a standard environment. This needs to be run as root. The root password is **ubuntu**

Use the following command to switch to root. Issue the password when prompted.

```bash
su -
```

Issue the following command:

```bash
unminimize
```

When prompted **Which services should be restarted** press **Enter**. You will reboot the system manually when the process has completed. This will take a few (approximately 2-5) minutes. Once it has completed, you will need to reboot the system.

| Command  | Description              |
| :------- | :----------------------- |
| reboot   | will reboot the system   |
| poweroff | will shutdown the system |

Issue the following command to reboot the system.

```bash
reboot
```

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

Now that you have confirmed your Internet connection and granted your user sudo access, it's time to use this new power wisely. Update the system using **apt**:

```bash
sudo apt -y update
```

Once that has completed, install the following packages with the command **sudo apt install** followed by the package names (separated by a space):

- vim
- nano
- man-db
- mandoc
- tldr

```bash
sudo apt install vim nano man-db mandoc tldr
```

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
