import 'dart:io' show File;
typedef LinuxDistroName = String;
typedef LinuxKernelVersion = String;
typedef LinuxKernelRelease = String;
typedef LinuxKernelName = String;
typedef LinuxUpTimeUnix = int;
typedef LinuxKernelMachine = String;
typedef LinuxKernelProcessor = String;
typedef LinuxKernelHardware = String;
typedef LinuxKernelOperatingSystem = String;
//  ignore: non_constant_identifier_names
LinuxKernelProcessor get_linux_kernel_processor() {
  final file = File('/proc/cpuinfo');
  if (!file.existsSync()) {
    return 'Unknown';
  }
  final lines = file.readAsLinesSync();
  for (final line in lines) {
    if (line.startsWith('Processor')) {
      final parts = line.split(':');
      if (parts.length < 2) {
        return 'Unknown';
      }
      return parts[1].trim();
    }
  }
  return 'Unknown';
}
// ignore: non_constant_identifier_names
LinuxKernelHardware get_linux_kernel_hardware() {
  final file = File('/proc/cpuinfo');
  if (!file.existsSync()) {
    return 'Unknown';
  }
  final lines = file.readAsLinesSync();
  for (final line in lines) {
    if (line.startsWith('Hardware')) {
      final parts = line.split(':');
      if (parts.length < 2) {
        return 'Unknown';
      }
      return parts[1].trim();
    }
  }
  return 'Unknown';
}

// ignore: non_constant_identifier_names
LinuxKernelMachine get_linux_kernel_machine() {
  final file = File('/proc/version');
  if (!file.existsSync()) {
    return 'Unknown';
  }
  final lines = file.readAsLinesSync();
  if (lines.isEmpty) {
    return 'Unknown';
  }
  final line = lines.first;
  final parts = line.split(' ');
  if (parts.length < 5) {
    return 'Unknown';
  }
  return parts[4];
}

// ignore: non_constant_identifier_names
LinuxKernelOperatingSystem get_linux_kernel_operating_system() {
  final file = File('/proc/version');
  if (!file.existsSync()) {
    return 'Unknown';
  }
  final lines = file.readAsLinesSync();
  if (lines.isEmpty) {
    return 'Unknown';
  }
  final line = lines.first;
  final parts = line.split(' ');
  if (parts.length < 4) {
    return 'Unknown';
  }
  return parts[3];
}
// ignore: non_constant_identifier_names
LinuxKernelName get_linux_kernel_name() {
  return 'Linux';
}
// ignore: non_constant_identifier_names
LinuxDistroName get_linux_distro_name() {
  final file = File('/etc/os-release');
  if (!file.existsSync()) {
    return 'Unknown';
  }
  final lines = file.readAsLinesSync();
  for (final line in lines) {
    if (line.startsWith('NAME=')) {
      return line.substring(5).replaceAll('"', '');
    }
  }
  return 'Unknown';
}
// ignore: non_constant_identifier_names
LinuxKernelRelease get_linux_kernel_release() {
  final file = File('/proc/version');
  if (!file.existsSync()) {
    return 'Unknown';
  }
  final lines = file.readAsLinesSync();
  if (lines.isEmpty) {
    return 'Unknown';
  }
  final line = lines.first;
  final parts = line.split(' ');
  if (parts.length < 2) {
    return 'Unknown';
  }
  return parts[1];
}
// ignore: non_constant_identifier_names
LinuxKernelVersion get_linux_kernel_version() {
  final file = File('/proc/version');
  if (!file.existsSync()) {
    return 'Unknown';
  }
  final lines = file.readAsLinesSync();
  if (lines.isEmpty) {
    return 'Unknown';
  }
  final line = lines.first;
  final parts = line.split(' ');
  if (parts.length < 3) {
    return 'Unknown';
  }
  return parts[2];
}
// ignore: non_constant_identifier_names
LinuxUpTimeUnix get_linux_uptime() {
  final file = File('/proc/uptime');
  if (!file.existsSync()) {
    return 0;
  }
  final lines = file.readAsLinesSync();
  if (lines.isEmpty) {
    return 0;
  }
  final line = lines.first;
  final parts = line.split(' ');
  if (parts.isEmpty) {
    return 0;
  }
  return int.parse(parts.first);
}
