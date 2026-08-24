import { PortfolioContent } from '../types/portfolio';

export const portfolioData: PortfolioContent = {
  profile: {
    name: "Shiva Karthik A N",
    fullName: "SHIVA KARTHIK A N",
    handle: "plausibleCoder",
    title: "Senior Software Engineer | Technical Lead | Enterprise Cloud & Data Architect",
    headline: "TOGAF | AWS | AI/ML | Data Engineering | Java & Microservices",
    tagline: "12+ Years Designing Enterprise Software, Cloud Lakehouses, and High-Scale Healthcare Systems",
    summary: "Senior Software Engineer and Technical Lead with 12+ years of experience designing and delivering enterprise software, cloud platforms, data engineering solutions, and analytics systems across healthcare and insurance. My experience spans Enterprise Architecture, AWS Cloud, Java/Spring Boot, Microservices, Data Engineering, AI/ML, and Distributed Systems, with hands-on ownership across solution design, architecture, development, cloud engineering, deployment, and technical leadership. Recent work includes architecting serverless AWS analytics platforms, processing 1M+ CDC records in 4.3 seconds, defining a 100TB target Snowflake architecture, supporting 90+ KPI anomaly detection use cases, and delivering sub-5-second analytics dashboards. TOGAF Enterprise Architecture certified, with experience in architecture vision, solution design, HLD/LLD, architecture governance, and Architecture Review Board presentations.",
    extendedBio: "Hands-on architectural leadership across the full lifecycle—from formal TOGAF ADM capability definition, stakeholder alignment, and Architecture Review Board (ARB) defense to microservice implementation, high-throughput PySpark data lakehouse streaming, and production deployment across AWS cloud environments.",
    location: "Jacksonville, Florida, USA",
    phone: "+1 (904) 820-1622",
    workAuthorization: "H1B Visa Holder",
    availability: "Available for Senior Software Engineer, Technical Lead & Enterprise Architect roles",
    yearsOfExperience: 12,
    socials: {
      github: "https://github.com/plausibleCoder",
      linkedin: "https://www.linkedin.com/in/shivakarthikan",
      email: "anshivakarthik@gmail.com",
      phone: "+1 (904) 820-1622",
      website: "https://plausibleCoder.github.io"
    },
    resumeDownloadUrl: "#resume"
  },

  stats: [
    {
      label: "Experience",
      value: "12+ Years",
      helper: "Enterprise Software & Cloud Architecture"
    },
    {
      label: "Data Ingestion Speed",
      value: "1M in 4.3s",
      helper: "CDC Delta Ingestion via PySpark"
    },
    {
      label: "Process Efficiency",
      value: "95% Reduction",
      helper: "48h to <1h for 80k+ Broker Ready-to-Sell"
    },
    {
      label: "Architecture Standard",
      value: "TOGAF® 10",
      helper: "Certified Enterprise Architect"
    }
  ],

  careerHighlights: [
    {
      id: "broker-perf",
      metric: "48h → <1h",
      label: "80,000+ Healthcare Brokers Ready-to-Sell",
      description: "Architected event-driven microservices with Spring Boot and Kafka, reducing Ready-to-Sell batch processing time by 95% for 80,000+ active healthcare brokers.",
      category: "Scale"
    },
    {
      id: "pyspark-snowflake",
      metric: "1M in 4.3s",
      label: "High-Throughput PySpark CDC Pipeline",
      description: "Designed PySpark data lakehouse ingestion processing 1M+ Change Data Capture records into Snowflake in 4.3 seconds using AWS Glue and S3.",
      category: "Throughput"
    },
    {
      id: "kpi-anomaly",
      metric: "90+ KPIs",
      label: "Statistical Anomaly Detection Platform",
      description: "Built automated anomaly detection using Z-Score, IQR, and Prophet forecasting across 90+ healthcare metrics, eliminating 85% of manual operational monitoring.",
      category: "Efficiency"
    },
    {
      id: "spicedash",
      metric: "<5s Latency",
      label: "Executive BI over 60M+ Cached Rows",
      description: "Delivered interactive Amazon QuickSight executive dashboards with SPICE caching, reducing query latency from minutes to under 5 seconds.",
      category: "Performance"
    }
  ],

  architecturalPillars: [
    {
      title: "Enterprise Architecture & Governance",
      tagline: "TOGAF 10 Certified Frameworks",
      description: "Translating business capabilities into cohesive data, application, and technology architectures (HLD/LLD), validated through Architecture Review Boards (ARB).",
      icon: "ShieldCheck"
    },
    {
      title: "Cloud & Data Lakehouse Engineering",
      tagline: "Serverless AWS & Snowflake Architecture",
      description: "Architecting 100TB data lakehouses, serverless AWS ETL (Glue, S3, Athena), and high-throughput CDC streaming pipelines with PySpark.",
      icon: "Layers"
    },
    {
      title: "Microservices & Distributed Systems",
      tagline: "High-Concurrency Java & Spring Boot",
      description: "Designing decoupled, event-driven microservices with Kafka, Spring Batch partitioning, and resilient transactional databases across high-scale environments.",
      icon: "Workflow"
    },
    {
      title: "Applied AI, ML & Predictive Analytics",
      tagline: "Machine Learning & Generative BI",
      description: "Integrating statistical anomaly detection, time-series forecasting (Prophet, XGBoost), Amazon Q Generative BI, and structured LLM agent orchestration.",
      icon: "Cpu"
    }
  ],

  architectureLayers: [
    {
      id: "layer-1-system-design",
      layerNumber: 1,
      category: "Foundation & Strategy",
      title: "Enterprise Architecture & System Design",
      summary: "Translating organizational business goals into enterprise architecture artifacts (TOGAF ADM Phases A-H), establishing technical standards, defining HLD/LLD blueprints, and governing architecture through formal Architecture Review Boards (ARB).",
      technologies: ["TOGAF 10 ADM", "HLD / LLD Design", "System Architecture", "ARB Governance", "Capability Modeling"],
      enterprisePatterns: [
        "Architecture Capability Planning & Risk Analysis",
        "Domain-Driven Design (Bounded Contexts)",
        "Architecture Governance & Review Board Defense",
        "Non-Functional Requirements (NFR) SLA Matrix"
      ],
      deliverables: [
        "High-Level & Low-Level Architecture Blueprints (HLD/LLD)",
        "Architecture Review Board (ARB) approval documentation",
        "Target-state Snowflake & AWS Cloud lakehouse roadmaps"
      ],
      iconName: "Compass"
    },
    {
      id: "layer-2-app-architecture",
      layerNumber: 2,
      category: "Software Structure",
      title: "Application & Service Architecture",
      summary: "Designing modular, loosely-coupled microservice architectures with clean separation of concerns, high concurrency handling, resilient circuit breaking, and event-driven decoupled asynchronous communications.",
      technologies: ["Microservices Architecture", "Event-Driven Systems", "Kafka", "RESTful API Standards", "Design Patterns"],
      enterprisePatterns: [
        "Decoupled Publisher/Subscriber Event Streaming",
        "Idempotent Consumer & Distributed Transactions",
        "Circuit Breaker & Retry Resiliency Policies",
        "Stateless Horizontal Scaling Topology"
      ],
      deliverables: [
        "Event schemas & transactional boundaries",
        "Fault-tolerant microservice contracts",
        "High-availability clustering strategies"
      ],
      iconName: "Layers"
    },
    {
      id: "layer-3-backend-services",
      layerNumber: 3,
      category: "Backend Engine",
      title: "Enterprise Java & High-Performance Services",
      summary: "Building robust, production-hardened backend services utilizing the enterprise Java ecosystem, Spring Boot 3, Spring Batch chunk processing, and optimized transactional databases.",
      technologies: ["Java 8 / 11 / 17", "Spring Boot", "Spring Batch", "Hibernate / JPA", "Oracle", "PostgreSQL", "Python"],
      enterprisePatterns: [
        "Chunk-Oriented Batch Processing & Partitioning",
        "Connection Pooling & Thread Pool Tuning",
        "Optimistic & Pessimistic Locking Safeguards",
        "Zero-Defect Code Quality Standards"
      ],
      deliverables: [
        "Spring Batch jobs processing 80k+ broker records",
        "High-concurrency RESTful microservices",
        "Enterprise transactional persistence layers"
      ],
      iconName: "Server"
    },
    {
      id: "layer-4-apis-integration",
      layerNumber: 4,
      category: "Connectivity",
      title: "APIs, Security & Data Integration",
      summary: "Exposing secure, contract-first RESTful APIs with strict validation, rate limiting, OAuth2/JWT role-based authorization, and real-time enterprise message queues.",
      technologies: ["REST APIs", "OAuth2 / JWT", "OpenAPI 3.0", "Apache Kafka", "AWS API Gateway", "Swagger"],
      enterprisePatterns: [
        "Contract-First API Specification & Governance",
        "Role-Based Access Control (RBAC) & Token Verification",
        "Asynchronous Webhook & Event Notifications",
        "Defensive Input Sanitization & Masking"
      ],
      deliverables: [
        "Secure microservice API endpoints",
        "HIPAA/PHI-compliant test data management interfaces",
        "Enterprise Kafka topic topologies & schemas"
      ],
      iconName: "Network"
    },
    {
      id: "layer-5-data-engineering",
      layerNumber: 5,
      category: "Data Platform",
      title: "Data Lakehouse, PySpark & Snowflake Ingestion",
      summary: "Engineering distributed data lakehouse platforms capable of streaming Change Data Capture (CDC) deltas, PySpark ETL transformations, and large-scale analytical warehousing in Snowflake.",
      technologies: ["Snowflake", "PySpark", "AWS Glue", "Change Data Capture (CDC)", "Apache Parquet", "Amazon Athena"],
      enterprisePatterns: [
        "Delta Ingestion & Bronze/Silver/Gold Lakehouse Tiers",
        "Serverless Distributed Spark Processing",
        "Parquet Columnar Compression & Snappy Partitioning",
        "Test Data Management (TDM) & Data Obfuscation"
      ],
      deliverables: [
        "1M+ CDC record ingestion pipeline (4.3s execution time)",
        "100TB target Snowflake lakehouse architecture specification",
        "Automated Glue crawlers and S3 partitioned datasets"
      ],
      iconName: "Database"
    },
    {
      id: "layer-6-cloud-infrastructure",
      layerNumber: 6,
      category: "Cloud Native",
      title: "AWS Cloud Infrastructure & Serverless DevOps",
      summary: "Designing serverless, highly resilient cloud infrastructure on AWS utilizing automated CI/CD pipelines, containerized microservices, and multi-VPC secure networking.",
      technologies: ["AWS S3", "AWS Glue", "AWS Lambda", "Amazon Athena", "Amazon QuickSight", "Docker", "Jenkins CI/CD", "Git"],
      enterprisePatterns: [
        "Serverless Lakehouse Storage & Compute Decoupling",
        "SPICE In-Memory Caching (60M+ Rows, <5s Latency)",
        "Automated Zero-Downtime Deployment Pipelines",
        "Least-Privilege IAM & Encrypted Storage"
      ],
      deliverables: [
        "Multi-stage CI/CD pipelines on Jenkins",
        "Serverless AWS lakehouse infrastructure with Athena & S3",
        "Dockerized microservice container deployments"
      ],
      iconName: "Cloud"
    },
    {
      id: "layer-7-ai-analytics",
      layerNumber: 7,
      category: "Applied Intelligence",
      title: "Applied AI, Machine Learning & Analytics",
      summary: "Empowering business leaders with automated statistical anomaly detection, time-series forecasting, Amazon Q Generative BI, and structured LLM agent orchestration.",
      technologies: ["Statistical Anomaly Detection (Z-Score, IQR)", "Prophet", "Scikit-learn", "Amazon Q Generative BI", "LLM Prompt Engineering", "Python"],
      enterprisePatterns: [
        "Statistical Baseline Drift & Outlier Detection",
        "Automated Alerting for 90+ Healthcare KPIs",
        "Generative BI Natural Language Querying",
        "Deterministic JSON Schema LLM Output Validation"
      ],
      deliverables: [
        "Operational anomaly detection engine monitoring 90+ KPIs",
        "Executive Amazon QuickSight interactive dashboards",
        "Automated forecasting models predicting metric trends"
      ],
      iconName: "Cpu"
    }
  ],

  blueprints: [
    {
      id: "elevance-lakehouse",
      title: "Elevance Health Serverless AWS Lakehouse & KPI Anomaly Detection",
      subtitle: "Serverless AWS Analytics, PySpark CDC & 100TB Snowflake Lakehouse",
      domain: "Healthcare Analytics & Enterprise Cloud",
      solutionSummary: "Architected a serverless AWS analytics platform ingesting 1M+ CDC records in 4.3 seconds, supporting a 100TB Snowflake lakehouse architecture, and automating anomaly detection across 90+ healthcare KPIs with sub-5-second QuickSight SPICE dashboards.",
      nodes: [
        {
          id: "node-cdc-source",
          label: "CDC Source (Oracle / Claims)",
          type: "client",
          role: "Source transactional feeds",
          tech: "Oracle Goldengate / Kafka",
          details: "Captures row-level database changes from core healthcare claims and membership systems with microsecond timestamps."
        },
        {
          id: "node-pyspark-glue",
          label: "AWS Glue & PySpark Engine",
          type: "service",
          role: "Distributed Ingestion & ETL",
          tech: "PySpark & AWS Glue",
          details: "Executes distributed transformations on CDC deltas, processing 1M+ records in 4.3 seconds with Snappy-compressed Parquet outputs."
        },
        {
          id: "node-s3-lakehouse",
          label: "Amazon S3 Partitioned Data Lake",
          type: "lakehouse",
          role: "Bronze & Silver Lakehouse Storage",
          tech: "S3, Athena, Parquet",
          details: "Stores multi-terabyte datasets partitioned by domain/year/month/day with serverless SQL query capability via Amazon Athena."
        },
        {
          id: "node-snowflake-wh",
          label: "100TB Snowflake Data Warehouse",
          type: "database",
          role: "Gold Enterprise Analytical Models",
          tech: "Snowflake & SnowSQL",
          details: "Defines dimensional data models, star schemas, and automated Snowpipe loading for 100TB analytical workloads."
        },
        {
          id: "node-anomaly-ml",
          label: "KPI Anomaly Detection Engine",
          type: "ai",
          role: "Statistical & Predictive Outliers",
          tech: "Z-Score, IQR, Prophet, Python",
          details: "Continuously computes statistical anomalies across 90+ operational healthcare KPIs, eliminating 85% of manual monitoring."
        },
        {
          id: "node-quicksight-spice",
          label: "Amazon QuickSight & SPICE Cache",
          type: "cloud",
          role: "Sub-5s Executive BI Dashboards",
          tech: "Amazon QuickSight SPICE (60M Rows)",
          details: "In-memory analytical caching layer enabling instant drill-downs, trend visualizers, and Amazon Q Generative BI integration."
        }
      ],
      dataFlow: [
        {
          from: "node-cdc-source",
          to: "node-pyspark-glue",
          protocol: "Streaming CDC Delta Feeds",
          description: "Micro-batch CDC change sets stream into distributed PySpark Glue jobs."
        },
        {
          from: "node-pyspark-glue",
          to: "node-s3-lakehouse",
          protocol: "Snappy Parquet Partitioning",
          description: "PySpark formats and writes 1M+ delta records into partitioned S3 paths in 4.3s."
        },
        {
          from: "node-s3-lakehouse",
          to: "node-snowflake-wh",
          protocol: "Snowpipe / Spark Connector",
          description: "Cleaned data is loaded into Snowflake dimensional tables for enterprise governance."
        },
        {
          from: "node-s3-lakehouse",
          to: "node-anomaly-ml",
          protocol: "Statistical Anomaly Scoring",
          description: "Python models evaluate dynamic Z-score and IQR thresholds across 90+ healthcare KPIs."
        },
        {
          from: "node-snowflake-wh",
          to: "node-quicksight-spice",
          protocol: "SPICE In-Memory Caching",
          description: "60M+ historical rows are refreshed into SPICE for sub-5-second executive analytics dashboards."
        }
      ],
      scaleCharacteristics: {
        throughput: "1,000,000+ CDC Records in 4.3s",
        latency: "Sub-5 Second Dashboard Query Latency",
        dataVolume: "100TB Target Lakehouse Architecture",
        efficiency: "85% Reduction in Manual Operational Checks"
      },
      tradeoffs: {
        pros: [
          "Zero-server maintenance with decoupled serverless compute & storage (S3 + Glue).",
          "Sub-5-second interactive reporting over massive 60M+ record datasets using SPICE.",
          "High-throughput PySpark distributed engine handles bursty healthcare peak loads."
        ],
        cons: [
          "Requires strict partition pruning discipline in Athena/S3 queries to maintain optimal cost.",
          "CDC schema evolution must be synchronized between source and downstream Snowflake schemas."
        ]
      }
    },
    {
      id: "carelon-broker-rts",
      title: "Carelon Event-Driven Broker Ready-to-Sell & Licensing Engine",
      subtitle: "High-Throughput Spring Boot, Spring Batch & Kafka Architecture",
      domain: "Healthcare Insurance & Broker Governance",
      solutionSummary: "Engineered an event-driven microservices and batch architecture managing licensing, state appointments, contracting, and compliance certifications for 80,000+ healthcare brokers, reducing batch runtimes from 48 hours to under 1 hour (95% performance improvement).",
      nodes: [
        {
          id: "node-broker-ui",
          label: "Broker Portal (Angular / Responsive)",
          type: "client",
          role: "Broker self-service & agent onboarding",
          tech: "Angular, TypeScript, Bootstrap",
          details: "Responsive enterprise portal allowing brokers and agencies to submit licenses, certifications, and compliance filings."
        },
        {
          id: "node-api-gateway",
          label: "API Gateway & Security Proxy",
          type: "gateway",
          role: "Authentication & Rate Limiting",
          tech: "Spring Cloud Gateway & OAuth2",
          details: "Enforces role-based access control, token validation, and rate limiting across external broker endpoints."
        },
        {
          id: "node-broker-service",
          label: "Broker Core Microservice",
          type: "service",
          role: "State licensing verification",
          tech: "Java 17, Spring Boot, JPA",
          details: "Processes real-time state license lookups, background check validations, and AHIP compliance certifications."
        },
        {
          id: "node-kafka-bus",
          label: "Apache Kafka Event Bus",
          type: "queue",
          role: "Asynchronous Event Backbone",
          tech: "Kafka Clusters & Avro",
          details: "Decouples broker lifecycle events (LicensingApproved, AppointmentRequested, CertUpdated) for asynchronous downstream processing."
        },
        {
          id: "node-batch-rts",
          label: "Spring Batch RTS Engine",
          type: "service",
          role: "Chunk-Oriented Batch Evaluation",
          tech: "Spring Batch (Partitioning)",
          details: "Evaluates 80,000+ brokers across 50 US state regulations using multi-threaded chunk processing, slashing processing from 48h to <1h."
        },
        {
          id: "node-broker-db",
          label: "Transactional Broker Store",
          type: "database",
          role: "ACID Broker State Records",
          tech: "Oracle 19c / PostgreSQL",
          details: "Stores broker entity hierarchies, NPN licenses, line-of-business appointments, and audit trails."
        }
      ],
      dataFlow: [
        {
          from: "node-broker-ui",
          to: "node-api-gateway",
          protocol: "HTTPS / REST (JWT)",
          description: "Brokers submit credential renewals and state license filings."
        },
        {
          from: "node-api-gateway",
          to: "node-broker-service",
          protocol: "Validated REST Payloads",
          description: "Gateway routes authenticated requests to core broker microservices."
        },
        {
          from: "node-broker-service",
          to: "node-kafka-bus",
          protocol: "Kafka Event Publishing",
          description: "Licensing state updates trigger asynchronous 'BrokerStatusChanged' events."
        },
        {
          from: "node-kafka-bus",
          to: "node-batch-rts",
          protocol: "Event-Triggered Batch Runs",
          description: "Batch engine consumes delta queues to re-evaluate Ready-to-Sell compliance status."
        },
        {
          from: "node-batch-rts",
          to: "node-broker-db",
          protocol: "Chunked Batch Commit",
          description: "Status commits in optimized 1,000-record chunks with transactional rollback protection."
        }
      ],
      scaleCharacteristics: {
        throughput: "80,000+ Healthcare Brokers Managed",
        latency: "Batch runtime reduced from 48h to <1h",
        dataVolume: "50-State Multi-Plan Insurance Rule Engine",
        efficiency: "95% Performance Improvement in RTS Validation"
      },
      tradeoffs: {
        pros: [
          "Chunk-oriented Spring Batch partitioning eliminates memory pressure and handles massive volume.",
          "Event-driven Kafka decoupling prevents broker portal timeouts during bulk seasonal enrollments.",
          "Strict ACID compliance ensures zero licensing discrepancies with state insurance departments."
        ],
        cons: [
          "Requires strict partition key ordering on Kafka topics to avoid out-of-order license update events.",
          "Database connection pools must be accurately sized for peak multi-threaded batch executor threads."
        ]
      }
    }
  ],

  projects: [
    {
      id: "kpi-anomaly-platform",
      title: "Enterprise KPI Anomaly Detection & Cloud Lakehouse",
      category: "Enterprise Cloud & AI",
      tagline: "Serverless AWS Analytics & 100TB Target Snowflake Lakehouse",
      repoName: "enterprise/kpi-anomaly-detection",
      description: "Architected a serverless AWS analytics data lakehouse and 100TB target Snowflake lakehouse to automate statistical anomaly detection across 90+ healthcare operational KPIs, delivering sub-5-second executive QuickSight dashboards.",
      longDescription: "Architected and delivered the enterprise-wide KPI anomaly detection and cloud analytics platform for Elevance Health / Deloitte. Ingested 1M+ Change Data Capture records into Snowflake in 4.3 seconds using PySpark on AWS Glue. Designed automated statistical anomaly detection models (Z-Score and IQR) across 90+ healthcare operational KPIs, eliminating 85% of manual monitoring overhead. Configured Amazon QuickSight with SPICE caching over 60M+ rows, reducing dashboard response time to under 5 seconds.",
      systemPattern: "Serverless Data Lakehouse + Distributed PySpark + In-Memory SPICE Caching",
      architectureHighlights: [
        "Processed 1M+ CDC delta records in 4.3 seconds via AWS Glue PySpark pipelines into Snowflake.",
        "Engineered automated anomaly detection using Z-Score, IQR, and Prophet forecasting across 90+ KPIs.",
        "Configured Amazon QuickSight with SPICE caching over 60M+ rows for sub-5-second executive BI query speeds.",
        "Established 100TB target Snowflake lakehouse architecture with partitioned S3 storage and Athena queries."
      ],
      keyOutcomes: [
        "1M+ CDC records processed in 4.3 seconds",
        "85% reduction in manual operational monitoring overhead",
        "Sub-5-second dashboard latency on 60M+ cached rows",
        "Architecture Review Board (ARB) approved production deployment"
      ],
      techStack: ["AWS Glue", "PySpark", "Snowflake", "Amazon QuickSight", "Amazon S3", "Athena", "Python", "Z-Score / IQR"],
      isFeatured: true,
      githubUrl: "https://github.com/plausibleCoder",
      liveUrl: "#architecture"
    },
    {
      id: "broker-management-engine",
      title: "Enterprise Healthcare Broker Management & RTS Platform",
      category: "Backend & Microservices",
      tagline: "High-Throughput Spring Boot & Kafka Event-Driven Architecture",
      repoName: "enterprise/broker-management-rts",
      description: "Architected and delivered the enterprise Broker Ready-to-Sell platform, orchestrating state licensing, appointments, background checks, and certifications for 80,000+ active healthcare brokers across 50 states.",
      longDescription: "Led the architectural design and engineering of the mission-critical Ready-to-Sell (RTS) broker management platform at Carelon Global Solutions. Managed state licensing compliance, contracting, certifications, and appointments for 80,000+ active healthcare brokers. Re-architected batch processing jobs with Spring Boot, Spring Batch chunk partitioning, and Apache Kafka event-driven workflows, reducing processing time from 48 hours to under 1 hour (95% performance improvement).",
      systemPattern: "Event-Driven Microservices + Spring Batch Partitioning + Kafka Backbone",
      architectureHighlights: [
        "Slashing batch processing time from 48 hours to under 1 hour (95% performance gain) for 80,000+ brokers.",
        "Engineered event-driven microservices using Spring Boot, Spring Batch, and Apache Kafka messaging.",
        "Integrated AHIP healthcare certifications, NPN license verification, and background checks across 50 US states.",
        "Led 3 Scrum teams (11 engineers) with zero-defect release track record and comprehensive unit test coverage."
      ],
      keyOutcomes: [
        "95% reduction in batch processing runtime (48h → <1h)",
        "80,000+ active healthcare brokers supported smoothly",
        "Zero-defect releases across major annual enrollment periods",
        "Full compliance with state insurance board licensing mandates"
      ],
      techStack: ["Java 17", "Spring Boot", "Spring Batch", "Apache Kafka", "Oracle 19c", "Docker", "Angular", "Jenkins CI/CD"],
      isFeatured: true,
      githubUrl: "https://github.com/plausibleCoder",
      liveUrl: "#architecture"
    },
    {
      id: "healthcare-tdm-platform",
      title: "Healthcare Test Data Management (TDM) Platform",
      category: "Data & Security",
      tagline: "Automated Data Masking & HIPAA/PHI-Compliant Synthetic Generation",
      repoName: "enterprise/healthcare-tdm-engine",
      description: "Engineered scalable test data management microservices and automated masking algorithms for complex healthcare claims, broker datasets, and policy records ensuring strict HIPAA/PHI compliance.",
      longDescription: "At Disruptive Tech Solutions, developed robust backend microservices, REST APIs, and automated data masking algorithms for healthcare clients. Built high-throughput data extraction and transformation pipelines for enterprise applications while ensuring HIPAA compliance through rigorous PHI/PII data obfuscation and synthetic data generation across non-production test environments.",
      systemPattern: "Secure REST Microservices + In-Memory Masking + CI/CD Test Pipelines",
      architectureHighlights: [
        "Designed and implemented high-speed data obfuscation algorithms protecting sensitive patient/broker PHI/PII.",
        "Built modular Spring Boot REST APIs facilitating automated self-service test data provisioning.",
        "Automated database containerization using Docker for rapid deployment of pre-seeded test environments.",
        "Integrated end-to-end automated testing pipelines with Jenkins CI/CD ensuring high code quality."
      ],
      keyOutcomes: [
        "100% HIPAA and PHI compliance across all lower test environments",
        "Reduced test dataset provisioning time from days to minutes",
        "Automated self-service test data generation for QA teams",
        "Zero data leaks or compliance violations"
      ],
      techStack: ["Java 17", "Spring Boot", "PostgreSQL", "Data Masking", "Docker", "AWS", "REST APIs", "Maven"],
      isFeatured: true,
      githubUrl: "https://github.com/plausibleCoder",
      liveUrl: "#architecture"
    },
    {
      id: "insurance-core-services",
      title: "Enterprise Healthcare & Insurance Core Services",
      category: "Enterprise Systems",
      tagline: "High-Reliability Transactional Microservices & Rule Engines",
      repoName: "enterprise/insurance-core-services",
      description: "Engineered scalable backend microservices, complex business rule processing engines, and transactional APIs supporting high-volume healthcare insurance and claims workflows.",
      longDescription: "Across Deloitte Consulting and Cognizant, led the modernization of legacy insurance and healthcare platforms into scalable Spring Boot microservices. Designed complex rule engines for claim eligibility, policy validation, and automated underwriting, improving system throughput and reducing transaction latency across enterprise core systems.",
      systemPattern: "Layered Microservices + Transactional Persistence + RESTful APIs",
      architectureHighlights: [
        "Modernized legacy monolithic insurance systems into modular, maintainable Spring Boot microservices.",
        "Optimized relational database schemas, complex SQL queries, and Hibernate ORM mappings for peak concurrency.",
        "Implemented secure RESTful API integrations with third-party verification providers and clearinghouses.",
        "Mentored junior engineers and led technical design reviews across cross-functional distributed teams."
      ],
      keyOutcomes: [
        "Modernized mission-critical legacy insurance systems to Spring Boot",
        "Optimized database query performance by over 40%",
        "Maintained 99.9% uptime during peak annual enrollment cycles",
        "Mentored and guided dozens of software engineers"
      ],
      techStack: ["Java", "Spring Boot", "Hibernate / JPA", "Oracle", "SQL Server", "REST APIs", "Docker", "Maven"],
      isFeatured: false,
      githubUrl: "https://github.com/plausibleCoder",
      liveUrl: "#architecture"
    }
  ],

  experience: [
    {
      id: "exp-disruptive",
      company: "Disruptive Tech Solutions Inc",
      role: "Senior Software Engineer",
      period: "Nov 2024 – Present",
      location: "Jacksonville, Florida, USA",
      overview: "Leading the development of scalable backend services, REST APIs, and automated Test Data Management (TDM) solutions for healthcare and enterprise clients, ensuring strict HIPAA/PHI compliance.",
      architectureAccomplishments: [
        "Architecting robust Java 17 and Spring Boot microservices with high-speed RESTful integration endpoints.",
        "Implementing automated data masking algorithms and synthetic test data pipelines protecting sensitive patient/broker PHI/PII data.",
        "Designing scalable data extraction and transformation workflows for enterprise healthcare clients.",
        "Deploying microservice containers via Docker and streamlining CI/CD delivery with automated test coverage."
      ],
      techStack: ["Java 17", "Spring Boot", "REST APIs", "PostgreSQL", "Docker", "TDM", "HIPAA Compliance", "Maven"]
    },
    {
      id: "exp-deloitte-us",
      company: "Deloitte Consulting LLP",
      role: "Senior Software Engineer / Analytics Specialist",
      period: "Mar 2024 – Nov 2024",
      location: "Indianapolis, Indiana, USA",
      overview: "Architected serverless AWS cloud analytics and lakehouse pipelines for Elevance Health, automating statistical anomaly detection and delivering executive QuickSight dashboards.",
      architectureAccomplishments: [
        "Ingested 1M+ Change Data Capture (CDC) records into Snowflake in 4.3 seconds using PySpark on AWS Glue.",
        "Defined target 100TB Snowflake data lakehouse architecture and serverless AWS ETL workflows (S3, Athena, Glue).",
        "Engineered automated statistical anomaly detection (Z-Score & IQR) across 90+ healthcare KPIs, eliminating 85% of manual monitoring.",
        "Configured Amazon QuickSight with SPICE caching over 60M+ rows, reducing dashboard response times to under 5 seconds.",
        "Integrated Amazon Q Generative BI for automated natural language querying and executive insights."
      ],
      techStack: ["AWS Glue", "PySpark", "Snowflake", "Amazon QuickSight (SPICE)", "Amazon S3", "Athena", "Python", "Prophet", "Z-Score / IQR"]
    },
    {
      id: "exp-carelon-lead",
      company: "Carelon Global Solutions (formerly Legato)",
      role: "Technical Lead",
      period: "Jul 2021 – Feb 2024",
      location: "Hyderabad, India",
      overview: "Led the architecture, engineering, and delivery of the enterprise Broker Ready-to-Sell platform across 3 Scrum teams (11 engineers) supporting 80,000+ active healthcare brokers.",
      architectureAccomplishments: [
        "Reduced Ready-to-Sell batch processing time from 48 hours to under 1 hour (95% improvement) using Spring Boot, Spring Batch chunk partitioning, and Kafka.",
        "Designed and maintained event-driven microservices managing state licensing, certifications, background checks, and contracting for 80k+ brokers.",
        "Led 3 Scrum teams (11 engineers), managed technical sprint planning, system design reviews, and zero-defect deployments.",
        "Presented solution architectures to Architecture Review Boards (ARB) and aligned designs with TOGAF enterprise principles."
      ],
      techStack: ["Java 17", "Spring Boot", "Spring Batch", "Apache Kafka", "Oracle 19c", "Docker", "Angular", "Jenkins CI/CD", "TOGAF 10"]
    },
    {
      id: "exp-carelon-swe",
      company: "Carelon Global Solutions",
      role: "Senior Software Engineer",
      period: "Jul 2018 – Jun 2021",
      location: "Hyderabad, India",
      overview: "Developed core broker management microservices, Angular user interfaces, and complex transactional integrations for healthcare insurance operations.",
      architectureAccomplishments: [
        "Built secure RESTful microservices with Spring Boot and Spring MVC supporting broker onboarding and license renewals.",
        "Developed responsive enterprise frontend dashboards in Angular, integrating RxJS state management and REST APIs.",
        "Optimized Oracle database schemas, complex SQL queries, and Hibernate ORM mappings for peak enrollment traffic."
      ],
      techStack: ["Java 11", "Spring Boot", "Spring MVC", "Angular", "TypeScript", "Oracle", "Hibernate", "REST APIs"]
    },
    {
      id: "exp-deloitte-india",
      company: "Deloitte Consulting India Pvt Ltd",
      role: "Senior Software Engineer / Consultant",
      period: "Oct 2015 – Jul 2018",
      location: "Bengaluru, India",
      overview: "Engineered scalable healthcare and life sciences insurance applications, business rule processing engines, and transactional batch pipelines.",
      architectureAccomplishments: [
        "Developed enterprise Java/J2EE and Spring backend services handling high-volume claims and policy workflows.",
        "Designed chunk-oriented Spring Batch jobs for nightly policy reconciliation and automated reporting.",
        "Collaborated with US healthcare clients on requirements elaboration, solution design, and production support."
      ],
      techStack: ["Java 8", "Spring Framework", "Spring Batch", "Oracle", "Web Services", "JPA", "Maven"]
    },
    {
      id: "exp-cognizant",
      company: "Cognizant Technology Solutions",
      role: "Programmer Analyst",
      period: "Feb 2013 – Sep 2015",
      location: "Bengaluru, India",
      overview: "Developed backend modules, database procedures, and web applications for enterprise healthcare and insurance clients.",
      architectureAccomplishments: [
        "Built core Java backend components and web user interfaces for insurance policy administration systems.",
        "Authored optimized SQL stored procedures and queries on Oracle and SQL Server databases.",
        "Participated in agile ceremonies, code reviews, and automated unit testing."
      ],
      techStack: ["Java/J2EE", "Spring", "Oracle", "SQL Server", "JSP", "JavaScript", "HTML/CSS"]
    }
  ],

  education: [
    {
      id: "edu-msc",
      degree: "Master of Science (MSc)",
      field: "Cyber Security",
      institution: "Liverpool John Moores University",
      location: "United Kingdom",
      highlights: ["Advanced Cyber Security Architecture", "Secure Distributed Systems", "Threat Modeling & Network Security"]
    },
    {
      id: "edu-pgd",
      degree: "Post Graduate Diploma (PGD)",
      field: "Computer Science",
      institution: "International Institute of Information Technology (IIIT)",
      location: "Bangalore, India",
      highlights: ["Algorithms & Data Structures", "Distributed Computing", "Software Engineering Architecture"]
    },
    {
      id: "edu-be",
      degree: "Bachelor of Engineering (B.E.)",
      field: "Electronics & Communication",
      institution: "Visvesvaraya Technological University (VTU)",
      location: "Karnataka, India",
      highlights: ["Digital Signal Processing", "Microprocessors & Embedded Systems", "Foundational Engineering"]
    }
  ],

  skills: [
    {
      id: "backend-engineering",
      title: "Backend Engineering",
      description: "Enterprise Java ecosystem, high-concurrency microservices, Spring framework, and transactional databases.",
      iconName: "Server",
      skills: [
        { name: "Java (8 / 11 / 17)", level: "Expert", experienceYears: 12, highlight: true, tags: ["Core", "Concurrency", "JVM Tuning"] },
        { name: "Spring Boot", level: "Expert", experienceYears: 8, highlight: true, tags: ["Microservices", "Auto-Config", "Cloud"] },
        { name: "Spring Batch", level: "Expert", experienceYears: 6, highlight: true, tags: ["Chunk Processing", "Partitioning", "ETL"] },
        { name: "REST APIs", level: "Expert", experienceYears: 10, highlight: true, tags: ["OpenAPI", "JSON", "Security"] },
        { name: "Spring MVC & Security", level: "Advanced", experienceYears: 8, tags: ["OAuth2", "JWT", "RBAC"] },
        { name: "FastAPI & Python", level: "Advanced", experienceYears: 4, tags: ["Async", "Pydantic", "APIs"] },
        { name: "Hibernate / JPA", level: "Expert", experienceYears: 9, tags: ["ORM", "Query Optimization"] }
      ]
    },
    {
      id: "data-engineering",
      title: "Data Engineering",
      description: "Distributed lakehouse architectures, PySpark pipelines, Snowflake warehousing, and CDC streaming.",
      iconName: "Database",
      skills: [
        { name: "Snowflake", level: "Expert", experienceYears: 4, highlight: true, tags: ["100TB Lakehouse", "SnowSQL", "Warehouses"] },
        { name: "PySpark", level: "Expert", experienceYears: 4, highlight: true, tags: ["Delta Lake", "Spark Connector", "1M in 4.3s"] },
        { name: "Python & Pandas", level: "Expert", experienceYears: 5, highlight: true, tags: ["Data Analysis", "Automation"] },
        { name: "SQL / PL-SQL", level: "Expert", experienceYears: 12, highlight: true, tags: ["Complex Queries", "Performance Tuning"] },
        { name: "Change Data Capture (CDC)", level: "Advanced", experienceYears: 4, tags: ["Delta Extraction", "Streaming Feeds"] },
        { name: "Parquet & S3 Data Lake", level: "Expert", experienceYears: 4, tags: ["Partitioning", "Snappy", "Athena"] },
        { name: "Test Data Management (TDM)", level: "Advanced", experienceYears: 2, tags: ["Data Masking", "PHI/PII", "Healthcare"] }
      ]
    },
    {
      id: "cloud-devops",
      title: "Cloud and DevOps",
      description: "AWS cloud-native services, serverless computing, container orchestration, and CI/CD pipelines.",
      iconName: "Cloud",
      skills: [
        { name: "AWS Glue & Athena", level: "Expert", experienceYears: 4, highlight: true, tags: ["Serverless ETL", "SQL On S3"] },
        { name: "Amazon QuickSight & SPICE", level: "Expert", experienceYears: 4, highlight: true, tags: ["60M-Row Cache", "Sub-5s BI"] },
        { name: "AWS Lambda & EKS", level: "Advanced", experienceYears: 4, tags: ["Serverless", "Kubernetes", "Microservices"] },
        { name: "Amazon Redshift & Aurora", level: "Advanced", experienceYears: 5, tags: ["Cloud DW", "PostgreSQL"] },
        { name: "Docker", level: "Expert", experienceYears: 6, highlight: true, tags: ["Containers", "Multi-stage Builds"] },
        { name: "CI/CD (Jenkins, Git, Maven)", level: "Expert", experienceYears: 10, highlight: true, tags: ["Automation", "Zero-Defect"] },
        { name: "AWS CloudWatch & VPC", level: "Advanced", experienceYears: 5, tags: ["Security", "Monitoring"] }
      ]
    },
    {
      id: "ai-analytics",
      title: "AI, ML & Analytics",
      description: "Applied machine learning, statistical anomaly detection, time-series forecasting, and LLMs.",
      iconName: "Cpu",
      skills: [
        { name: "Statistical Anomaly Detection", level: "Expert", experienceYears: 4, highlight: true, tags: ["Z-Score & IQR", "90+ KPIs"] },
        { name: "Amazon Q Generative BI", level: "Advanced", experienceYears: 2, highlight: true, tags: ["Natural Language Analytics"] },
        { name: "Scikit-learn & XGBoost", level: "Advanced", experienceYears: 3, tags: ["ML Classification", "Regression"] },
        { name: "Prophet & Time Series", level: "Advanced", experienceYears: 3, tags: ["Forecasting", "Seasonal Drift"] },
        { name: "LLM Prompt Engineering", level: "Advanced", experienceYears: 2, highlight: true, tags: ["Claude", "Structured Output"] },
        { name: "Matplotlib & KPI Analytics", level: "Advanced", experienceYears: 4, tags: ["Data Visualization", "Trends"] }
      ]
    },
    {
      id: "architecture-governance",
      title: "Architecture & Governance",
      description: "Formal enterprise architecture frameworks, system design, HLD/LLD artifacts, and ARB governance.",
      iconName: "Compass",
      skills: [
        { name: "TOGAF 10 Framework", level: "Expert", experienceYears: 4, highlight: true, tags: ["Certified", "ADM Cycle", "Governance"] },
        { name: "System Design & HLD/LLD", level: "Expert", experienceYears: 10, highlight: true, tags: ["High Availability", "Fault Tolerance"] },
        { name: "Architecture Review Board (ARB)", level: "Expert", experienceYears: 5, highlight: true, tags: ["Stakeholder Defense", "Blueprints"] },
        { name: "Event-Driven Architecture", level: "Expert", experienceYears: 7, tags: ["Kafka", "Decoupled Systems"] },
        { name: "Technical Leadership", level: "Expert", experienceYears: 6, highlight: true, tags: ["3 Scrum Teams", "11 Engineers", "Mentoring"] }
      ]
    },
    {
      id: "frontend-engineering",
      title: "Frontend Engineering",
      description: "Modern component-based user interfaces, responsive design, state management, and API consumption.",
      iconName: "Layout",
      skills: [
        { name: "Angular (7–11)", level: "Advanced", experienceYears: 6, highlight: true, tags: ["TypeScript", "RxJS", "Enterprise UI"] },
        { name: "React 19", level: "Advanced", experienceYears: 4, highlight: true, tags: ["Hooks", "Context", "Modern SPAs"] },
        { name: "TypeScript", level: "Expert", experienceYears: 6, highlight: true, tags: ["Strict Typing", "Interfaces"] },
        { name: "HTML5, CSS3, Tailwind CSS", level: "Expert", experienceYears: 10, tags: ["Responsive", "Semantic UI"] },
        { name: "Bootstrap & UI Systems", level: "Advanced", experienceYears: 8, tags: ["Enterprise Dashboards"] }
      ]
    }
  ],

  certifications: [
    {
      id: "togaf-cert",
      title: "TOGAF® Enterprise Architecture Certified",
      issuer: "The Open Group",
      issueDate: "Certified Practitioner & Foundation Combined",
      badgeType: "Gold",
      credentialId: "TOGAF-EA-COMBINED",
      verificationUrl: "https://www.opengroup.org",
      highlights: [
        "Certified in TOGAF Enterprise Architecture ADM methodology (Architecture Development Method).",
        "Mastery across Architecture Vision, Business, Data, Application, and Technology Architectures.",
        "Architecture governance, Architecture Review Board (ARB) presentation, and enterprise risk management."
      ],
      domainsCovered: ["Enterprise Architecture", "ADM Phases A-H", "Architecture Governance", "Capability-Based Planning"]
    },
    {
      id: "aws-cert",
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services (AWS)",
      issueDate: "Certified",
      badgeType: "Cyan",
      credentialId: "AWS-SAA",
      verificationUrl: "https://aws.amazon.com/certification/",
      highlights: [
        "Architecting secure, resilient, high-performing, and cost-optimized architectures on AWS.",
        "Serverless data lakes with AWS Glue, S3, Athena, and Amazon QuickSight SPICE.",
        "Multi-VPC networking, security controls, IAM policies, and high-availability database tiering."
      ],
      domainsCovered: ["Resilient Architectures", "High-Performing Compute & Storage", "Secure Applications", "Cost Optimization"]
    },
    {
      id: "ahip-cert",
      title: "AHM-250 Healthcare Management",
      issuer: "AHIP (America's Health Insurance Plans)",
      issueDate: "Certified",
      badgeType: "Emerald",
      credentialId: "AHM-250",
      verificationUrl: "https://www.ahip.org",
      highlights: [
        "In-depth mastery of US healthcare management systems, health plans, operational workflows, and regulatory compliance.",
        "Healthcare broker operations, licensing, provider credentialing, and claims processing lifecycle."
      ],
      domainsCovered: ["Healthcare Operations", "Health Plan Administration", "Regulatory Standards", "Provider & Broker Ecosystems"]
    },
    {
      id: "anthropic-claude-101",
      title: "Certificate of Completion: Claude 101",
      issuer: "Anthropic",
      issueDate: "Certified",
      badgeType: "Purple",
      credentialId: "ANTHROPIC-101",
      verificationUrl: "https://anthropic.com",
      highlights: [
        "Core foundational prompt engineering, system instructions, and LLM behavior tuning.",
        "Structured JSON schema enforcement and deterministic output validation."
      ],
      domainsCovered: ["LLM Foundations", "Prompt Engineering", "Structured Output", "AI Workflows"]
    },
    {
      id: "anthropic-claude-code",
      title: "Claude Code in Action",
      issuer: "Anthropic",
      issueDate: "Certified",
      badgeType: "Purple",
      credentialId: "ANTHROPIC-CODE",
      verificationUrl: "https://anthropic.com",
      highlights: [
        "Agentic software development workflows, tool use, terminal automation, and code orchestration.",
        "Building production-grade AI agent systems with human-in-the-loop governance."
      ],
      domainsCovered: ["Agentic Workflows", "Tool Use & Function Calling", "Code Automation", "AI Engineering"]
    }
  ],

  githubRepos: [
    {
      name: "plausibleCoder",
      fullName: "plausibleCoder/plausibleCoder",
      description: "GitHub Profile and Enterprise Architecture showcase for Shiva Karthik A N.",
      stars: 12,
      forks: 4,
      language: "TypeScript",
      languageColor: "#3178c6",
      topics: ["enterprise-architecture", "spring-boot", "aws-lakehouse", "snowflake", "togaf"],
      updatedAt: "2026-08-24",
      isFeatured: true,
      url: "https://github.com/plausibleCoder"
    }
  ]
};
