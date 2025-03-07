import React from 'react';
import {
  Cloud,
  Database,
  Server,
  Shield,
  Lock,
  Monitor,
  Network,
  Container,
  Radio,
  Globe,
  Layers,
  Router,
  Cpu,
  GitBranch,
  Settings,
  AlertTriangle,
  Gauge,
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
            AWS EKS Architecture
          </h1>
          <p className="mt-2 text-slate-600">High-Performance Edge Computing Infrastructure</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          {/* Documentation Section */}
          <div className="mb-8 gradient-border p-6 hover-scale">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <GitBranch className="w-6 h-6 text-indigo-600" />
              </div>
              <h2 className="text-xl font-semibold text-slate-800">Architecture Overview</h2>
            </div>
            <div className="space-y-6 text-slate-600">
              <div className="bg-indigo-50 p-4 rounded-xl">
                <h3 className="font-medium text-slate-800 mb-2">Infrastructure Specifications</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Multi-AZ deployment across 3 availability zones</li>
                  <li>VPC with public and private subnets in each AZ</li>
                  <li>NAT Gateways for private subnet internet access</li>
                  <li>Transit Gateway for cross-region connectivity</li>
                </ul>
              </div>
              <div className="bg-indigo-50 p-4 rounded-xl">
                <h3 className="font-medium text-slate-800 mb-2">Network Architecture</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>VPC CIDR: 10.0.0.0/16</li>
                  <li>Public Subnets: 10.0.0.0/20, 10.0.16.0/20, 10.0.32.0/20</li>
                  <li>Private Subnets: 10.0.48.0/20, 10.0.64.0/20, 10.0.80.0/20</li>
                  <li>Direct Connect integration for on-premises connectivity</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Edge Layer */}
          <div className="mb-8 gradient-border p-6 hover-scale">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Radio className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-xl font-semibold text-slate-800">Edge Computing Layer</h2>
            </div>
            <div className="flex flex-col md:flex-row justify-start gap-4 md:gap-8 items-start md:items-center">
              <div className="bg-orange-50 p-4 rounded-xl shadow-sm flex items-center gap-3">
                <Radio className="w-5 h-5 text-orange-500" />
                <span className="font-medium text-slate-700">RFID Reader</span>
              </div>
              <div className="hidden md:block text-slate-400">→</div>
              <div className="bg-orange-50 p-4 rounded-xl shadow-sm flex items-center gap-3">
                <Router className="w-5 h-5 text-orange-500" />
                <span className="font-medium text-slate-700">CradlePoint Gateway</span>
              </div>
            </div>
            <div className="mt-4 bg-orange-50 p-4 rounded-xl">
              <h3 className="font-medium text-slate-800 mb-2">Edge Layer Specifications</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
                <li>RFID Reader: High-frequency 13.56 MHz ISO/IEC 14443</li>
                <li>CradlePoint: IBR1700 with dual-modem capability</li>
                <li>Edge Processing: Local data filtering and aggregation</li>
                <li>Bandwidth: Up to 1 Gbps with LTE Advanced Pro</li>
              </ul>
            </div>
          </div>

          {/* VPC Structure */}
          <div className="gradient-border p-6 mb-8 hover-scale">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Cloud className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-slate-800">AWS Virtual Private Cloud</h2>
            </div>

            {/* Public Subnet */}
            <div className="mb-6 bg-gradient-to-br from-blue-50 to-blue-100/50 p-6 rounded-xl">
              <h3 className="text-md font-semibold text-slate-700 mb-4">Public Subnet</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3">
                  <Globe className="w-5 h-5 text-blue-500" />
                  <div>
                    <h4 className="font-medium text-slate-700">Internet Gateway</h4>
                    <p className="text-sm text-slate-500">External Access</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3">
                  <Network className="w-5 h-5 text-blue-500" />
                  <div>
                    <h4 className="font-medium text-slate-700">Load Balancer</h4>
                    <p className="text-sm text-slate-500">Traffic Distribution</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3">
                  <Shield className="w-5 h-5 text-blue-500" />
                  <div>
                    <h4 className="font-medium text-slate-700">WAF & Shield</h4>
                    <p className="text-sm text-slate-500">Security Layer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Private Subnet - EKS */}
            <div className="mb-6 bg-gradient-to-br from-emerald-50 to-emerald-100/50 p-6 rounded-xl">
              <h3 className="text-md font-semibold text-slate-700 mb-4">Private Subnet - EKS Cluster</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <Container className="w-5 h-5 text-emerald-600" />
                      <h4 className="font-medium text-slate-700">Worker Node Group 1</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Cpu className="w-4 h-4 text-emerald-500" />
                        Reader-Stream Pod
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Cpu className="w-4 h-4 text-emerald-500" />
                        Gateway-image Pod
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <Container className="w-5 h-5 text-emerald-600" />
                      <h4 className="font-medium text-slate-700">Worker Node Group 2</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Cpu className="w-4 h-4 text-emerald-500" />
                        Core-image Pod
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Cpu className="w-4 h-4 text-emerald-500" />
                        UI-image Pod
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <Layers className="w-5 h-5 text-emerald-600" />
                      <h4 className="font-medium text-slate-700">Supporting Services</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Cpu className="w-4 h-4 text-emerald-500" />
                        Reports Service
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Cpu className="w-4 h-4 text-emerald-500" />
                        Rules Processing
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Cpu className="w-4 h-4 text-emerald-500" />
                        ArgoCD
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Autoscaling Configuration */}
            <div className="mb-6 bg-gradient-to-br from-yellow-50 to-yellow-100/50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-5 h-5 text-yellow-600" />
                <h3 className="text-md font-semibold text-slate-700">Autoscaling Configuration</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Gauge className="w-5 h-5 text-yellow-500" />
                    <h4 className="font-medium text-slate-700">Horizontal Pod Autoscaling</h4>
                  </div>
                  <div className="space-y-2 text-sm text-slate-600">
                    <p>• CPU Threshold: 70%</p>
                    <p>• Memory Threshold: 80%</p>
                    <p>• Min Replicas: 2</p>
                    <p>• Max Replicas: 10</p>
                    <p>• Scale-up Delay: 3 minutes</p>
                    <p>• Scale-down Delay: 5 minutes</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-500" />
                    <h4 className="font-medium text-slate-700">Cluster Autoscaling</h4>
                  </div>
                  <div className="space-y-2 text-sm text-slate-600">
                    <p>• Min Nodes: 3</p>
                    <p>• Max Nodes: 15</p>
                    <p>• Scale-out Threshold: 80%</p>
                    <p>• Node Groups: t3.xlarge, c5.2xlarge</p>
                    <p>• Spot Instance Integration</p>
                    <p>• Multi-AZ Distribution</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Private Subnet - Data Layer */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 p-6 rounded-xl">
              <h3 className="text-md font-semibold text-slate-700 mb-4">Private Subnet - Data Layer</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Database className="w-5 h-5 text-purple-500" />
                    <h4 className="font-medium text-slate-700">Amazon MSK</h4>
                  </div>
                  <div className="space-y-2 text-sm text-slate-600">
                    <p>• 4 Kafka Topics</p>
                    <p>• Multi-AZ Deployment</p>
                    <p>• Auto-scaling enabled</p>
                    <p>• Retention: 7 days</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Database className="w-5 h-5 text-purple-500" />
                    <h4 className="font-medium text-slate-700">MongoDB Atlas</h4>
                  </div>
                  <div className="space-y-2 text-sm text-slate-600">
                    <p>• Multi-AZ Replica Set</p>
                    <p>• Auto Scaling Enabled</p>
                    <p>• M50 Cluster Tier</p>
                    <p>• Backup: Continuous</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Server className="w-5 h-5 text-purple-500" />
                    <h4 className="font-medium text-slate-700">ElastiCache</h4>
                  </div>
                  <div className="space-y-2 text-sm text-slate-600">
                    <p>• Redis Cluster</p>
                    <p>• Read Replicas: 2</p>
                    <p>• Node Type: r6g.xlarge</p>
                    <p>• Auto-failover: enabled</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Security & Monitoring */}
          <div className="gradient-border p-6 hover-scale">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-100 rounded-lg">
                <Lock className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-xl font-semibold text-slate-800">Security & Monitoring</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Lock className="w-5 h-5 text-red-500" />
                  <h4 className="font-medium text-slate-700">IAM & IRSA</h4>
                </div>
                <p className="text-sm text-slate-600">Pod-level permissions</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-5 h-5 text-red-500" />
                  <h4 className="font-medium text-slate-700">Security Groups</h4>
                </div>
                <p className="text-sm text-slate-600">Network isolation</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Monitor className="w-5 h-5 text-red-500" />
                  <h4 className="font-medium text-slate-700">CloudWatch</h4>
                </div>
                <p className="text-sm text-slate-600">Metrics & Logs</p>
              </div>
            </div>
          </div>

          {/* Data Flow Legend */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            <h3 className="text-sm font-medium text-slate-600 mb-3">Data Flow</h3>
            <div className="flex flex-wrap gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span>Edge Data</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>Ingress Traffic</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                <span>Application Flow</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>Data Storage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;