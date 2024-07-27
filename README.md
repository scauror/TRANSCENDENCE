# TRANSENDENCE

## Building the project
Only linux is supported.

### Dependencies
You must have `docker`, `docker-compose` and `GNU make` installed on your machine.

### Building
The build system is done via a `makefile`.

There are two build modes:
- #### `dev`
> Developpement environment.

- #### `prod`
> Production environment.

The default build mode is [`dev`](#dev).

To chose the build mode, you can either
modify the `BUILD_MODE` variable in the `Makefile` or
pass the build mode as a command-line argument to the `make` command:
> `make [rule] BUILD_MODE=[BUILD_MODE]`

Here are the rules:
- #### `all`
> Alias for [`run`](#run).

- #### `run`
> Starts all the docker VMs.<br/>
> If the dockers need to be built, builds them.

- #### `build`
> Builds the dockers.

- #### `build-nocache`
> Builds the dockers without using the cached operations.<br/>
> It ensured the builds are up-to-date with the source tree.

- #### `down`
> Stops all the running dockers of this project.

- #### `down-volumes`
> Same as [`down`](#down) but also deletes the data within the VMs.

- #### `re`
> Restarts the VMs.

- #### `rebuild`
> Same as [`re`](#re) but also [rebuilds](#build) the VMs.

- #### `rebuild-nocache`
> Same as [`re`](#re) but also [rebuilds](#build-nocache) the VMs without using cached operations.
