# Enhanced Kalman with Adaptive Appearance Motion SORT for Grounded Generic Multiple Object Tracking

## Installation

To set up the environment and install the required dependencies, follow these steps:

1. **Create the Conda Environment:**

   ```bash
   conda env create -f environment.yaml
   ```

2. **Activate the Conda Environment:**

   ```bash
   conda activate g2mot
   ```

3. **Install the Package:**

   ```bash
   pip install -e .
   ```

## Usage

To run the tracking algorithm, use the following command:

```bash
python track.py --source .asset/car.avi --main-object 'red car'
python track.py --source .asset/car.avi --main-object 'blue car'
python track.py --source .asset/car.avi --main-object 'yellow vehicle'
```

- `--source`: Path to the video file.
- `--main-object`: Description of the object to track.