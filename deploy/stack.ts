import { Certificate, CertificateValidation } from '@aws-cdk/aws-certificatemanager';
import { HostedZone } from '@aws-cdk/aws-route53';
import { CfnOutput, Construct, Stack, StackProps } from '@aws-cdk/core';

export class GlobalStack extends Stack {
	constructor(scope: Construct, id: string, props?: StackProps) {
		super(scope, id, props);

		const hostedZone = HostedZone.fromHostedZoneAttributes(this, 'HostedZone', {
			hostedZoneId: 'Z03308839UCKCOXZ5BOC',
			zoneName: 'flareline.com',
		});

		const certificate = new Certificate(this, 'GlobalCertificate', {
			domainName: 'flareline.com',
			validation: CertificateValidation.fromDns(hostedZone),
		});

		new CfnOutput(this, 'GlobalCertificateArn', {
			value: certificate.certificateArn,
		});
	}
}
