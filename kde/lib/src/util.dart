import 'dart:io' show File;

typedef LinuxDistroName = String;
typedef LinuxKernelVersion = String;
typedef LinuxKernelRelease = String;
typedef LinuxKernelName = String;

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
