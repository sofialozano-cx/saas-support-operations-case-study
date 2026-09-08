export type Ticket={id:string;account:string;plan:string;region:string;priority:'Urgent'|'High'|'Normal';status:string;summary:string;reported:string}
export const tickets:Ticket[]=[
{id:'TKT-201',account:'Northstar Labs',plan:'Enterprise',region:'US-East',priority:'Urgent',status:'Incident linked',summary:'Webhook events created but not delivered',reported:'09:12'},
{id:'TKT-202',account:'Cobalt Commerce',plan:'Growth',region:'EU-West',priority:'High',status:'Incident linked',summary:'Order webhooks delayed for 20+ minutes',reported:'09:24'},
{id:'TKT-203',account:'Atlas Health',plan:'Enterprise',region:'US-West',priority:'Urgent',status:'Incident linked',summary:'Webhook retry queue increasing',reported:'09:31'},
{id:'TKT-204',account:'Mira Finance',plan:'Growth',region:'LATAM',priority:'High',status:'Incident linked',summary:'Automation not triggered after event',reported:'09:47'},
{id:'TKT-205',account:'Lumen Works',plan:'Starter',region:'EU-West',priority:'Normal',status:'Monitoring',summary:'Intermittent webhook delivery',reported:'10:03'}]
export const timeline=[
['09:12','First report','Northstar Labs reports missing webhook deliveries.'],
['09:24','Pattern emerging','Second customer reports similar delivery delays.'],
['09:38','Investigation','Support confirms events are created and API authentication is healthy.'],
['09:47','Incident declared','Multiple regions and customer endpoints are affected. INC-042 opened.'],
['10:02','Engineering engaged','Structured escalation package sent with event IDs, timestamps and impact.'],
['10:26','Root cause isolated','Webhook worker deployment introduced queue-processing regression.'],
['10:41','Mitigation','Deployment rolled back; queue begins draining.'],
['11:08','Recovery validated','Delivery latency returns to baseline; affected customers monitored.'],
['11:24','Resolved','Incident resolved and post-incident review initiated.']]
export const evidence=[['API health','Healthy','Core API requests return expected 2xx responses.'],['Event creation','Healthy','Events exist with valid IDs and timestamps.'],['Authentication','Healthy','No shared token/authentication failures detected.'],['Customer endpoints','Mixed','Independent endpoints affected across regions.'],['Delivery queue','Degraded','Queue depth and delivery latency increased.'],['Webhook workers','Root cause','Regression correlated with recent worker deployment.']]
