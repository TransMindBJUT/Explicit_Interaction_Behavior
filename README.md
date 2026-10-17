# Contrasting Explicit Interaction Behavior of Autonomous and Human-Driven Vehicles at Signalized Intersections

<p align="center">
  <img src="docs/static/images/framework.jpg" alt="Framework for explicit interaction event identification, feature representation, and AV-HV comparison" width="85%">
</p>

## Abstract

Understanding how autonomous vehicles (AVs) interact with surrounding road users is essential for evaluating their integration into mixed traffic at signalized intersections. However, differences between AVs and human-driven vehicles (HVs) across road-user types and interaction patterns remain insufficiently characterized within a common event framework. Here, we develop an ego-vehicle-centered framework for explicit interaction behavior (EIB), defined by co-occurring kinematic-indicator deviations and local spatiotemporal proximity. We conduct an empirical analysis using the full roadside trajectory dataset collected over 24 h at three signalized intersections in the Beijing High-level Automated Driving Demonstration Area in Yizhuang. Of 166,045 extracted events, 114,244 have complete features for indicator comparisons and Gaussian mixture model clustering. Clustering identifies five trajectory-crossing interaction patterns and four proximity interaction patterns. Results show that AV events have lower pooled medians of mean absolute longitudinal acceleration, lateral acceleration, and jerk than HV events, while proximity differences vary by target road-user type. The largest trajectory-crossing pattern-share differences occur with non-motorized vehicles: AVs have a 13.56-percentage-point higher share of the pattern characterized by smaller post-encroachment time (PET) and a 9.10-percentage-point lower share of the pattern characterized by larger PET and stronger lateral adjustments. Both differences retain their directions under an alternative event-merging scheme. Within-pattern comparisons pooling target types show that lower AV motion-adjustment medians do not consistently accompany higher PET medians. These findings support evaluating AV interactions through both pattern composition and within-pattern characteristics, beyond aggregate kinematic indicators.

## Project Page

The interactive project page presents the EIB definition, event statistics, overall comparisons, between-pattern characteristics, and within-pattern AV-HV differences.

View the project page:

[https://transmindbjut.github.io/Explicit_Interaction_Behavior/](https://transmindbjut.github.io/Explicit_Interaction_Behavior/)

For local viewing, open `docs/index.html` in a browser. No build step or server is required.

## Authors

Shaobin Yang<sup>1</sup>, Lishan Sun<sup>1</sup>, Pengfei Cui<sup>1*</sup>, Lei Han<sup>2</sup>, Yang Yang<sup>3</sup>, Xingchen Zhang<sup>1</sup>, Rusi Chu<sup>1</sup>

<sup>1</sup> Beijing University of Technology &middot; <sup>2</sup> University of Central Florida &middot; <sup>3</sup> Beijing Jiaotong University

\* Corresponding author: [Pengfei Cui](mailto:pengfeicui@bjut.edu.cn)

## Data Availability

The authors do not have permission to share the raw trajectory data. This repository contains only the project page and figures; the manuscript PDF and processing and analysis code are not included. Processed data are available on request.

## Citation

*To be added upon publication.*
